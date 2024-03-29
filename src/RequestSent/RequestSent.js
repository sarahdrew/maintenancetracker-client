import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RequestsContext from '../contexts/RequestsContext';


export default class RequestSent extends Component {

    static defaultProps = {
        match: { params: {} },

    }
    static contextType = RequestsContext


    render() {
        return (

            <div className="signed-in">
                <h2>Your Request has been sent</h2>
                <Link to={`/requests/:/requestsId`}> Check on or update the status of your request </Link>
            </div>
        )
    }
}