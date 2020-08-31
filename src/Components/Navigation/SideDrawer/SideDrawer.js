import React from 'react'
import styles from "./SideDrawer.module.css"
import NavigationItems from "../NavigationItems/NavigationItems"
import Logo from '../../Logo/Logo'

const SideDrawer = () => {
    return (
        <div className={styles.sideDrawer}>
            <div className={styles.logo1}>
                <Logo />
                </div>
            <nav>
                <NavigationItems/>
            </nav>
            
        </div>
    )
}

export default SideDrawer
