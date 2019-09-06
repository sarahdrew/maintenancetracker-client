import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";

export default class Nav extends Component {
    render() {
        if (TokenService.hasAuthToken()) {
            return (<>
                <div className="Nav">
                    <div className="nav-name">MAINTENANCETRACKER</div>

                </div>
                <div className="links">
                    <Link to='/' >Home</Link>
                    |
                     <Link to='/register'>Register </Link> |
                     <Link to='sign-in'>Sign In </Link> |
                    <Link to='/requests'> All Requests</Link> |
                     <Link to='/create-request'>Create Request</Link>
                </div>
            </>)

        }
        else {
            return (
                <>
                    <div className="Nav">
                        <div className="nav-name">MAINTENANCETRACKER</div>

                    </div>
                    <div className="links">
                        <Link to='/' >Home</Link>
                        |
                         <Link to='/register'>Register </Link> |
                         <Link to='sign-in'>Sign In </Link>

                    </div>
                </>
            )
        }


    }
}