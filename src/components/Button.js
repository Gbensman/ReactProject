import React, { Component } from 'react'
export class Reusebtn extends Component{
    render(){
        return(
            
                <button className={this.props.className} onClick={this.props.onClick}>{this.props.btnName}</button>
            
        )
    }
}
export default Reusebtn