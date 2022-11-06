import React from 'react'
import './Tenth.css';
import estherImage from '../images/Phone1-500x500.jpg'
import TenthProp from './TenthProp'

const Tenth=(props)=>{
    return <div>
                <div className='card-wrap'>
                    <TenthProp
                    displayImg={estherImage}
                    name='Esther Okoh'
                    sex='Female'
                    title='Full Stack Developer'
                    />
                    <TenthProp
                    displayImg={estherImage}
                    name='Esther Okoh'
                    sex='Female'
                    title='Full Stack Developer'
                    />
                    <TenthProp
                    displayImg={estherImage}
                    name='Esther Okoh'
                    sex='Female'
                    title='Full Stack Developer'
                    />
                </div>
            </div>
}


export default Tenth