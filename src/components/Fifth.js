import React, { Component } from 'react'

export class Fifth extends Component {
    constructor(){
        super()
        this.state ={greeting: 'Welcome', msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, placeat. Amet vel eaque ab repellat!'}
    }

    changemessage(){
        this.setState({greeting: "Goodbye", msg:"to see you again"})
    }

    render() {
        return (
            <div>
                <h1>{this.state.greeting} User, {this.state.msg}</h1>
                <button onClick={this.changemessage.bind(this)}>Log Out</button>
            </div>
        )
    }
}