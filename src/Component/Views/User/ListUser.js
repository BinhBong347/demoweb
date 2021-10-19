import React, { Component } from 'react';
import axios from 'axios';
import "./listUser.scss"
import { withRouter } from 'react-router-dom';

class ListUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listUser: []
        }
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=1')
        .then(res => {
            this.setState({
                listUser: res && res.data && res.data.data ? res.data.data : []
            })
        })
    }
    // Hàm để khi CLICK sẽ có bất ngờ
    handleClich = (abc) => {
        this.props.history.push(`/user/${abc.id}`) 
    }
    render () {
        let {listUser} = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch list User
                </div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => {
                    
                        return (
                            <div className="child"  key ={item.id} 
                            onClick={() => this.handleClich(item)}
                            >
                                {index+1} - {item.first_name} {item.last_name} <br/>
                            </div>
                        )
                    })}
                   
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);