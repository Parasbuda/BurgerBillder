import React from "react"
import "./NavigationItem.css"
const NavigationItem = ({ link, title, active }) => {
  ;<li className="navigationItem">
    <a href={link} className={`${active}?"active":null`}>
      {title}
    </a>
  </li>
}

export default NavigationItem
