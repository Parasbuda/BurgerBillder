import React from 'react'
import "./Layout.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
class Layout extends React.Component {
    state= {
        showSideDrawer:false
    }
    sideDrawerClosed = () => {
        this.setState({
            showSideDrawer:false
        })
    }
    sideDrawerToggle = () => {
        this.setState((prevState)=> {
            return  { showSideDrawer: !prevState.showSideDrawer }
        }
           
        )
    }
    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggle={this.sideDrawerToggle}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosed}/>
                <main className="content">
                    {
                        this.props.children
                    }
                </main>
            </React.Fragment>
        )
    }
}

export default Layout
