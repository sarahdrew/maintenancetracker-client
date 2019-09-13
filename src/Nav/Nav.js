import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from '../services/token-service';
import './Nav.css'

export default class Nav extends Component {
    render() {
        if (TokenService.hasAuthToken() === true) {
            return (
                <>
                    <div className="Nav">


                        <div className="links">
                            <Link to='/' >Home</Link>  |
                        <Link to='/requests'> All Requests</Link> |
                         <Link to='/create-request'> Create Request</Link> |
                            <Link to="/logout" onClick={e => { e.preventDefault(); TokenService.clearAuthToken(); this.props.history.push('/') }}> Logout</Link>
                        </div>
                    </div>
                </>
            )
        }
        else
            return (
                <>
                    <div className="Nav">
                        <div className="links">
                            <Link to='/' >Home</Link>  |
             <Link to='/register'> Register </Link> |
             <Link to='sign-in'> Sign In </Link>
                        </div>
                    </div>
                </>
            )



    }



}
