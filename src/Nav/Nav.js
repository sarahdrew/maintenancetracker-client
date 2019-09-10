import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default class Nav extends Component {
    render() {

        return (<>
            <div className="Nav">

            </div>
            <div className="links">
                <Link to='/' >Home</Link>  |
                     <Link to='/register'> Register </Link> |
                     <Link to='sign-in'> Sign In </Link> |
                    <Link to='/requests'> All Requests</Link> |
                     <Link to='/create-request'> Create Request</Link>
            </div>
        </>)

    }



}
