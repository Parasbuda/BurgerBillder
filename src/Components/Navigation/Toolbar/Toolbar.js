import React from "react"
import "./Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

const Toolbar = () => {
  return (
    <header className="toolbar">
      <div>Menu</div>
      <div className="logo2">
        <Logo />
        </div>
          <nav className="desktopOnly">
              <NavigationItems/>
      </nav>
    </header>
  )
}

export default Toolbar
