import React from 'react'
import "./NavigationItems.css"
import NavigationItem from '../NavigationItem/NavigationItem'
const NavigationItems = () => {
   
        return(
    <ul className="navigationItems">
       <NavigationItem active linkto="/" >Burger Builder</NavigationItem>
       <NavigationItem linkto="/checkout" >Checkout</NavigationItem>
        </ul>
        )
  
}

export default NavigationItems
