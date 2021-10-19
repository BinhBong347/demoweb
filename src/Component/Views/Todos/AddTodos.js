import React, { Component } from "react";

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    handleOnchangtile = (e) => {
        this.setState({title: e.target.value})
        
    }

    handleClicktodo = () => {
        if(!this.state.title) {
            alert('Cần điền đủ')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() *10000),
            tiltle: this.state.title
        }

        
        this.props.addNewtodo(todo);

        this.setState({
            title: ""
        })
    }

    render() {
        let {title} = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title}
                onChange={(e) => this.handleOnchangtile(e)}/>
                <button type="button" className="add"
                onClick={() => this.handleClicktodo()}>Add</button>
            </div>
        )
    }
}
export default AddTodo;