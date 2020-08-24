import React from 'react'
import "./Layout.css"
const Layout = (props) => {
    return (
        <React.Fragment>
            <div>BUilder sidedrawer</div>
            <main className="content">
            {
                props.children
                }
                </main>
        </React.Fragment>
    )
}

export default Layout
