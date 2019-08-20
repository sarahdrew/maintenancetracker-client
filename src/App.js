import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import AllRequests from "./AllRequests/AllRequests";
import Registration from './Registration/Registration';
import SignIn from './SignIn/SignIn';
import UpdateRequest from './UpdateRequest/UpdateRequest';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="App">
      <nav> <Nav /></nav>
      <main className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/requests' component={AllRequests} />
        <Route path="/update-request" component={UpdateRequest} />
        <Route path='/register' component={Registration} />
        <Route path='/sign-in' component={SignIn} />

      </main>
    </div>

  );
}

export default App;