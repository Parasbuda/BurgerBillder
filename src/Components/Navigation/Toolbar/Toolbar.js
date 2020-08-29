import React from "react"
import "./Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../Toolbar/Toolbar"
const Toolbar = () => {
  return (
    <header className="toolbar">
      <div>Menu</div>
        <Logo/>
          <nav>
              <NavigationItems/>
      </nav>
    </header>
  )
}

export default Toolbar
