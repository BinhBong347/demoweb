import React, { Component } from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../../assets/images/anh 1.jpg";
import { connect } from 'react-redux'

class Home extends Component {

    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.props.history.push("/todo")
    //     }, 3000)
    // }

    // Làm cái FC để xóa dữ liệu
    handleDelte = (user1) => {
        console.log(user1);
        // this.props.deleteRedux(user1);
        this.props.deleteRedux(user1);
    }
    // Cái này để THÊM DỮ LIỆU
    handleCreateItem = () => {
        this.props.addItem();
    }
    render() {
        console.log(this.props.dataRedux);
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>HOME PAGE</div>
                <img src={logo} alt={"anh"} />
                <div>
                    {listUser && listUser.length > 0 &&
                     listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index +1} -- {item.name} <button onClick={() =>
                                this.handleDelte(item)}>XÓA</button>
                            </div>
                        )
                    })}
                    <button onClick={() => this.handleCreateItem()}>Thêm</button>
                </div>
            </>
        )
    }
}
// state này là của Redux
const mapStateToProps = (state) => {
   return {
    dataRedux: state.user  
   } 
} 
// Sử dụng 1 cái của REDUX dispart
const mapDistpatch = (dispatch) => {
    return {
        deleteRedux: (userdelete) => dispatch({type: 'DELETE_USER', payload: userdelete}),
        addItem: () => dispatch({type: 'CREATE_USER'})
    }
}
export default connect(mapStateToProps, mapDistpatch)(Color(Home));