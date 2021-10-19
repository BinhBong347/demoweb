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
        ],
        editTodo: ""
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
    // DELETE
    handleDele = (todo) => {
        let currenTodo = this.state.listTodos

        currenTodo = currenTodo.filter((item) => item.id !== todo.id);

        this.setState({
            listTodos: currenTodo
        })
    }

    // EDIT
        handleEdit = (todo) => {
            alert("Phần này tìm hiểu thêm...")
        }
    render() {
        let {listTodos} = this.state;
        return (
            <>
            <p>Chào mừng đến với Trái Đất đáng yêu nhất quả đất !!</p>
                <div className="container">
                    <AddTodo addNewtodo={this.addNewtodo}/>
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key ={item.id}>
                                <span> {index +1} -- {item.tiltle}</span>
                                <button className="edit"
                                onClick={() => this.handleEdit(item)}>Edit</button>
                                <button className="dele" 
                                onClick={() => this.handleDele(item)}>Delete</button>
                            </div>
                            )
                        })
                        }
                    
                    </div>
                </div>
            </>
        )
}


}
export default Listtodo;