import React, { Component } from 'react';

export default class AllRequests extends Component {
    render() {
        return (
            <div className="total-request-item">
                <div className="request-content">
                    <header className="totalRequestItem__header">
                        <h2> All requests from tenant</h2>
                        <h3 className="totalRequestItem__heading">
                            Request Description Name
                        </h3>
                    </header>
                    <div className="request-item">
                        <p>Description: Lorem ipsum blah blah blah blah blah</p>
                    </div>
                </div>
            </div>
        )
    }
}