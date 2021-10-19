import React, { Component } from "react";
import ChildComp from "./ChildrenComp";


class Mytest extends Component {
constructor(props) {
    super(props)

    this.state= {
        fname: "",
        lname:"",
        arr: [
            {id: "Job1", title: "JS", coin: 500},
            {id: "Job2", title: "PH", coin: 400},
            {id: "Job3", title: "React", coin: 200}
        ]
    }
}

handleFname = (e) =>  {
   return this.setState({fname: e.target.value}) }

handleLname = (e) => {
   return this.setState({lname: e.target.value}) }
//    Cho on click
onClickbtn = (e) => {
    e.preventDefault()
    console.log(this.state)
}


    render() {
        return (
            <>
            <form>
                <label htmlFor="fname">First Name: </label>
                <input type="text" id="fname" value={this.state.fname}
                onChange={(e) => this.handleFname(e)}/><br/>
                <label htmlFor="lname">Last Name: </label>
                <input type="text" id="lname" value={this.state.lname}
                onChange={(e) => this.handleLname(e)}/><br/>
                <input type="submit" value="Đăng nhập"
                onClick={(e) => this.onClickbtn(e)}/>
            </form>
            <ChildComp name={this.state.lname}
            age="26"
            arr={this.state.arr}/>
            </>
        )
    }
}

export default Mytest;