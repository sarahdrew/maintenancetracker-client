import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <div className="headline">
                    <div className="icon-image">
                        <img src={require('../imgs/hammer-icon.png')} alt="maintenancetracker logo" />
                        <h2>MaintenanceTracker</h2>
                    </div>

                    <h3>A space for landlords and tenants to communicate efficiently</h3>
                    <h4>Tenants submit requests, landlords update progress.</h4>
                    <div className="trackergif">
                        <img src={require('../imgs/tracker-gif.png')} alt="maintenancetracker gif" />

                    </div>
                </div>
                <div className="LandingPage">


                    <div className="explanation">

                        How to get started:
                        <ul><li><Link to="/register">Register for an account</Link></li>

                            <li><Link to="/sign-in">Sign in with account credentials</Link></li>

                            <li><Link to="/create-request"> Create a request </Link></li></ul>

                        <b>To get started using a demo, head to the sign in page and use the demo credentials.</b>


                    </div>
                </div>

            </>
        )
    }



}