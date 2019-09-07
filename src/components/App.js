import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateHabit from '../containers/createHabit';
import { withSession } from '../Auth0Proivder';

export default function App() {
  return (
    <>
      <Router>
        <h1>Hello World</h1>
        <Switch>

          <Route exact path='/' component={withSession(CreateHabit)} />

  
        </Switch>
      </Router>
    </>
  );
}
