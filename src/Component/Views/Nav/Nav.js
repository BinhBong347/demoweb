import React, { Component } from 'react'
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends Component {

    render () {
        return (
    <div className="topnav">
        <NavLink exact to="/" activeClassName ="active">Home</NavLink>
        <NavLink to="todo" activeClassName ="active">Todos</NavLink>
        <NavLink to="about" activeClassName ="active">About</NavLink>
        <NavLink to="user" activeClassName ="active">User</NavLink>
    </div>
        )
    }
}
export default Nav;