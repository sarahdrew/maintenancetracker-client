import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <>
                <div className="Nav">
                    <div className="nav-name">MAINTENANCETRACKER</div>

                </div>
                <div className="links">
                    <Link to='/' >Home</Link>
                    |
                     <Link to='/register'>Register </Link> |
                     <Link to='sign-in'>Sign In/Out </Link> |
                     <Link to='/requests'> MY PROFILE</Link>
                </div>
            </>
        )
    }
}