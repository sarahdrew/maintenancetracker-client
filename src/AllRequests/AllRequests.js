import React, { Component } from 'react';
import RequestApiService from '../services/request-api-service';
import RequestsContext from '../contexts/RequestsContext';
import RequestPage from '../RequestPage/RequestPage';
import { Link } from "react-router-dom";

export default class AllRequests extends Component {

    static contextType = RequestsContext

    componentDidMount() {
        RequestApiService.getAllRequests()
            .then(requests => this.context.setRequests(requests))
            .catch(error => console.error(error))
    }
    render() {
        console.log(this.context.requests);
        return (
            <div className="total-request-item">
                <div className="request-content">
                    <header className="totalRequestItem__header">
                        <h2> All requests for landlord:</h2>
                    </header>
                    {
                        this.context.requests.map(request => {
                            return (
                                <div className="requests">
                                    ---------------------------------------
                                    <p><Link to="/requests/:requestsId"> Request Title: {request.title}</Link></p>

                                    <p>{request.description}</p>
                                    ---------------------------------------
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}