import React, { useState } from 'react'
import Button from './Button'

const Eleventh = () => {
const [greetings, setGreetings] = useState('Welcome')
const [message, setMessage] = useState('Enjoy your self')


    return (
        <div>
            <h1>{greetings} User. {message}</h1>
            <Button btnName="Logout" onClick={()=>{
                setGreetings('Goodbye')
                setMessage("See you next time.")
                }}/>
            <Button btnName="Login" onClick={()=>{
                setGreetings('Welcome')
                setMessage("Good to have you here.")
            }}/>
        </div>
    )
}

export default Eleventh