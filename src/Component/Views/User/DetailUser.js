import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class DetailUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

     componentDidMount() {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            axios.get(`https://reqres.in/api/users/${id}`)
            .then(res => {
                this.setState({
                    user: res && res.data && res.data.data ? res.data.data : {}
                })
            })
        }

    }
    // Cái func khi ấn sẽ quay lại
    handleBack = () => {
        this.props.history.push("/user")
    }
    // Luôn nhớ là hàm dưới đã chạy rồi nó mới lên trên
    render() {
        console.log(this.props)
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === 0;

        return(
            <>
                <div>Hế lô tôi có ID: {this.props.match.params.id}</div>
                {isEmptyObj === false && 
                <>
                    <div>User's name: {user.first_name} {user.last_name}</div>
                    <div>User's email: {user.email}</div>
                    <div><img src ={user.avatar} alt={user.first_name} /></div>
                    <div><button onClick={() => this.handleBack()}>BACK</button></div>
                </>}
            </>
        )
    }
}

export default withRouter(DetailUser);