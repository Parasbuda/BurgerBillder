import React from 'react'
import "./NavigationItems.css"
import NavigationItem from '../NavigationItem/NavigationItem'
const NavigationItems = () => {
    <ul className="navigationItems">
       <NavigationItem link="/" title="Burger Builder" active/>
       <NavigationItem link="/" title="Checkout" />
   </ul>
}

export default NavigationItems
