import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class RequestSent extends Component {
    render() {
        return (

            <div className="signed-in">
                <h2>Your Request has been sent</h2>
                <Link to="/requests/:requestsId"> Check on or update the status of your request </Link>
            </div>
        )
    }
}