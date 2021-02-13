/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import KrustyJanContainer from '../theKrustyContainer/main/KrustyJanContainer';
// import KrustyHistory from '../theKrustyContainer/KrustyHistory';
// import KrustyHelp from '../theKrustyContainer/KrustyHelp';


// -----------------------------------------------------------------------------------
export default class App extends Component {

  // -----------------------------------------------------------------------------------

  render() {
    return (
  
      <Router>

        <Switch>

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
