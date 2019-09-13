import React, { Component } from 'react';
import { Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import AllRequests from "./AllRequests/AllRequests";
import Registration from './Registration/Registration';
import SignIn from './SignIn/SignIn';
import CreateRequest from './CreateRequest/CreateRequest';
import SignedIn from './SignedIn/SignedIn';
import Nav from './Nav/Nav';
import RequestPage from './RequestPage/RequestPage';
import RequestSent from './RequestSent/RequestSent';
import RequestsContext from './contexts/RequestsContext';
import './App.css'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      requests: [],
      request: '',
      isSignedIn: false,
      setRequest: (request) => {
        this.setState({ request: request });
      },
      setRequests: (requests) => {
        this.setState({ requests: requests })
      },
      updateRequests: (request) => {
        this.setState({ request: request })
      }

    }
  }
  render() {
    return (
      <div className="App" >
        <RequestsContext.Provider value={this.state} >
          <nav> <Route path="/" component={Nav} /></nav>
          <main className='App'>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/requests' component={AllRequests} />
            <Route path='/register' component={Registration} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/create-request' component={CreateRequest} />
            <Route path='/signed-in' component={SignedIn} />
            <Route path='/requests/:requestsId' component={RequestPage} />
            <Route path='/request-sent' component={RequestSent} />
          </main>
        </RequestsContext.Provider>
      </div>

    );
  }

}
