import React, { Component } from "react";

class ChildComp extends  Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: 0
        }
    }
    renderText= () => {
        this.setState({selected: 1})
        
    }
    hideText=() => this.setState({selected: 0})
    render() {
       let {arr} = this.props
        return(
            <>
                {this.state.selected ===0 && <button onClick={() => this.renderText()}>Show</button>}
                {this.state.selected === 1 && 
                <>
                    {arr.map((ar) => {
                        return(
                            <div key={ar.id}>
                                ID: {ar.id}
                                Tên: {ar.title}
                                Giá: {ar.coin}
                            </div>
                        )
                    })}
                    <button onClick={() => this.hideText()}>HIDE</button>
                </> }
            </>
        )
    }
}

export default ChildComp;