import React from 'react'
import imag1 from '../images/Phone1-500x500.jpg'
import imag2 from '../images/Phone2-500x500.jpg'
import imag3 from '../images/Phone1-500x500.jpg'
import imag4 from '../images/Phone2-500x500.jpg'
import imag5 from '../images/Phone1-500x500.jpg'
import imag6 from '../images/Phone2-500x500.jpg'
import './Ecomm.css'

const Ecom = ()=>{
    return <div>
        <div className="products-wrap">
            <div className="products">
                <img src={imag1} alt="" />
                <div className="price">
                    <p>$300.00</p>
                    <p>Product name</p>
                </div>
            </div>
            <div className="products">
                <img src={imag2} alt="" />
                <div className="price">
                    <p>$300.00</p>
                    <p>Product name</p>
                </div>
            </div>
            <div className="products">
                <img src={imag3} alt="" />
                <div className="price">
                    <p>$300.00</p>
                    <p>Product name</p>
                </div>
            </div>
            <div className="products">
                <img src={imag4} alt="" />
                <div className="price">
                    <p>$300.00</p>
                    <p>Product name</p>
                </div>
            </div>
            <div className="products">
                <img src={imag5} alt="" />
                <div className="price">
                    <p>$300.00</p>
                    <p>Product name</p>
                </div>
            </div>
            <div className="products">
                <img src={imag6} alt="" />
                <div className="price">
                    <p>$300.00</p>
                    <p>Product name</p>
                </div>
            </div>
        </div>
    </div>
}

export default Ecom