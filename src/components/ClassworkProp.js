import React from 'react'

const ClassworkProp = (props)=>{
    return <div>
        <div className="box-id">
        <img src={props.displayimg} alt="" />
        <p>{props.text}</p>
        </div>
    </div>
}

export default ClassworkProp