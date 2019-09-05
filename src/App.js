import React, { Component } from 'react';
import { Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import AllRequests from "./AllRequests/AllRequests";
import Registration from './Registration/Registration';
import SignIn from './SignIn/SignIn';
import UpdateRequest from './UpdateRequest/UpdateRequest';
import CreateRequest from './CreateRequest/CreateRequest';
import SignedIn from './SignedIn/SignedIn';
import Nav from './Nav/Nav';
import RequestPage from './RequestPage/RequestPage';
import RequestSent from './RequestSent/RequestSent';
import RequestsContext from './contexts/RequestsContext';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      requests: [],
      request: '',
      setRequest: (request) => {
        this.setState({ request: request });
      },
      setRequests: (requests) => {
        this.setState({ requests: requests })
      },

    }
  }
  render() {
    return (
      <div className="App" >
        <RequestsContext.Provider value={this.state} >
          <nav> <Nav /></nav>
          <main className='App'>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/requests' component={AllRequests} />
            <Route path="/update-request" component={UpdateRequest} />
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
