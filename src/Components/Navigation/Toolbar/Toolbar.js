import React from "react"
import "./Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <DrawerToggle clicked={props.drawerToggle}/>
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
