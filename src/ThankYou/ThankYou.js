import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ThankYou extends Component {
    render() {
        return (

            <div className="signed-in">
                <h2>Thanks for submitting an update!</h2>
                <Link to="/requests">Back to all requests</Link> |
                <Link to="/create-request"> Create a request </Link>

            </div>
        )
    }
}