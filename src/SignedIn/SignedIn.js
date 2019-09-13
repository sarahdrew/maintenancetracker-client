import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SignedIn extends Component {
    render() {
        return (

            <div className="signed-in">
                <h2>Successfully signed in!</h2>
                <Link to="/requests">View all requests for landlord</Link> |
                <Link to="/create-request"> Create a request </Link>

            </div>
        )
    }
}