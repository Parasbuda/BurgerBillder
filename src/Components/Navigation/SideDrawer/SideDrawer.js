import React from "react"
import "./SideDrawer.css"
import NavigationItems from "../NavigationItems/NavigationItems"
import Logo from "../../Logo/Logo"
import Backdrop from "../../UI/Backdrop/Backdrop"
const SideDrawer = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      {props.open ? (
        <div className="sideDrawer open">
          <div className="logo1">
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      ) : (
        <div className="sideDrawer close">
          <div className="logo1">
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      )}
    </React.Fragment>
  )
}

export default SideDrawer
