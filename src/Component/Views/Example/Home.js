import React, { Component } from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../../assets/images/anh 1.jpg"

class Home extends Component {

    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.props.history.push("/todo")
    //     }, 3000)
    // }
    render() {
        
        return (
            <>
                <div>HOME PAGE</div>
                <img src={logo} alt={"anh"} />
            </>
        )
    }
}
export default Color(Home);