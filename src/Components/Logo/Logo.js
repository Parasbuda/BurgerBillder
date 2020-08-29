import React from 'react'
import burgerlogo from '../../assets/images/burger-logo.png'
import "./Logo.css"
const Logo = () => {
    return (
        <div className="logo">
        <img src={burgerlogo} alt="logo"/>
        </div>
    )
}

export default Logo
