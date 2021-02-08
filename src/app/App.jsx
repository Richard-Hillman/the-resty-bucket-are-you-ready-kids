/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import KrustyJanContainer from '../theKrustyContainer/KrustyJanContainer';
// import KrustyHistory from '../theKrustyContainer/KrustyHistory';
// import KrustyHelp from '../theKrustyContainer/KrustyHelp';


// -----------------------------------------------------------------------------------
export default class App extends Component {

  // -----------------------------------------------------------------------------------

  render() {
    return (
  
      <Router>

        <Switch>

          {/* this will be the home route */}
          <Route
            path="/"
            exact
            component = { KrustyJanContainer }
          />

          {/* <Route
              path="/history"
              exact
              component = { KrustyHistory }
            />

            <Route
              path="/help"
              exact
              component = { KrustyHelp }
            /> */}

        </Switch>

      </Router>

    );
  }
}
