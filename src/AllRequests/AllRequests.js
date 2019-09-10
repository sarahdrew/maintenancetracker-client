import React, { Component } from 'react';
import RequestApiService from '../services/request-api-service';
import RequestsContext from '../contexts/RequestsContext';
import LoadingPage from '../LoadingPage/LoadingPage';

import { NavLink } from "react-router-dom";

export default class AllRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    static contextType = RequestsContext

    componentDidMount() {
        RequestApiService.getAllRequests()
            .then(requests => { this.context.setRequests(requests); this.setState({ loading: false }) })
            .catch(error => console.error(error))
    }
    render() {

        return (
            this.state.loading ? <LoadingPage /> :
                <div className="total-request-item">
                    <div className="request-content">
                        <header className="totalRequestItem__header">
                            <h2> All requests for landlord:</h2>
                        </header>
                        {
                            this.context.requests.map((request, item) => {

                                return (

                                    <div key={item} className="requests">

                                        <p ><NavLink to={`/requests/${request.id}`} activeStyle={{ color: 'green' }}> Request Title: {request.title}</NavLink></p>

                                        <p >{request.description}</p>

                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

        )
    }
}