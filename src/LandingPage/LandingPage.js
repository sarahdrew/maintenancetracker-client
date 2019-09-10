import React, { Component } from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <div className="headline">
                    <div className="icon-image">
                        <img src={require('../hammer-icon.png')} alt="maintenancetracker logo" />
                        <h2>MaintenanceTracker</h2>
                    </div>

                    <h3>A space for landlords and tenants to communicate efficiently</h3>
                    <h4>Tenants submit requests, landlords update progress.</h4>
                    <div className="trackergif">
                        <img src={require('../tracker-gif.png')} alt="maintenancetracker gif" />

                    </div>
                </div>
                <div className="LandingPage">


                    <div className="explanation">

                        How to get started:
                        <ul><li>Register for an account</li>
                            <li>Sign in with account credentials</li>
                            <li>Check listings to update status or create a listing</li></ul>

                        <b>To get started using a demo, head to the sign in page and use the demo credentials.</b>


                    </div>
                </div>

            </>
        )
    }



}