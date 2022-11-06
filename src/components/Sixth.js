import React, { Component } from "react";
import Button from "./Button";
export class Sixth extends Component {
    constructor(){
        super()
        this.state = {count:0}
    }
    componentDidMount(){
        document.title = `You clicked ${this.state.count}`
    }
    componentDidUpdate(){
        document.title = `You clicked ${this.state.count}`
    }
    increase=()=>{
        this.setState({count: this.state.count +3})
    }   
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <Button btnName='increase by 3' onClick={this.increase}/>
            </div>
        )
    }
}
export default Sixth