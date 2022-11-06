import React, { Component } from 'react'


export class Fourth extends Component {
    render() {
        let msg;
        const time = new Date().getHours();
        if(time < 12){
            msg='Good morning'
        }else if(time >= 12 && time < 16){
            msg='Good afternoon'
        }else if(time >= 16 && time< 20){
            msg='Good evening'
        }

        return(
            <div>
                <h1>{msg}</h1>
            </div>
        )

    }
}

export default Fourth