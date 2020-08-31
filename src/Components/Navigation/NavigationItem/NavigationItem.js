import React from "react"
import "./NavigationItem.css"
import { act } from "react-dom/test-utils"
const NavigationItem = ( props ) => {
  const { linkto, active, children } = props
  
 
  return(
  <li className="navigationItem">
    <a href={linkto} className={`${active}?"active":"null"`}>
      {children}
    </a>
      </li>
  )
  
}

export default NavigationItem
