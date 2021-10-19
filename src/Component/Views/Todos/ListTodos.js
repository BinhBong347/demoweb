import React, { Component } from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodos";

class Listtodo extends Component {
constructor(props) {
    super(props)

    this.state= {
        listTodos: [
            {id:"todo1", tiltle:"Doing homeword"},
            {id:"todo2", tiltle:"Doing123"},
            {id:"todo3", tiltle:"Doing "}
        ]
    }
}

addNewtodo = (todo) => {

    // let currenListtodo = this.state.listTodos
    // currenListtodo.push(todo)
    // this.setState({
    //     listTodos: currenListtodo
    // })
    this.setState({listTodos: [...this.state.listTodos, todo]})
}
render() {
    let {listTodos} = this.state;
    return (
        <div className="container">
            <AddTodo addNewtodo={this.addNewtodo}/>
            <div className="list-todo-content">
                {listTodos && listTodos.length > 0 &&
                listTodos.map((item, index) => {
                    return (
                        <div className="todo-child" key ={item.id}>
                        <span> {index +1} -- {item.tiltle}</span>
                        <button className="edit">Edit</button>
                        <button className="dele">Delete</button>
                    </div>
                    )
                })
                }
               
            </div>
        </div>
    )
}


}
export default Listtodo;