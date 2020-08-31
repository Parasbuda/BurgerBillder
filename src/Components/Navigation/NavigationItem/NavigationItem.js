import React from "react"
import "./NavigationItem.css"
const NavigationItem = (props) => {
  const { linkto, active, children } = props
  
  return (
    <li className="navigationItem">
      {active ?
        (< a href={linkto} className="active">
      {children}
    </a>): (< a href={linkto} >
      {children}
    </a>)
}
      </li>
  )
  
}

export default NavigationItem
