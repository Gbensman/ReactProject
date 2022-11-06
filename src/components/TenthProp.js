import React from 'react'

const TenthProp = (props) =>{
    return (
        <div className='card-wrap'>
                    <div className='card-id'>
                        <img src={props.displayImg} alt="" />
                        <h4>{props.name}</h4>
                        <h4>{props.sex}</h4>
                        <h4>{props.title}</h4>
                    </div>
                </div>

    )
}

export default TenthProp