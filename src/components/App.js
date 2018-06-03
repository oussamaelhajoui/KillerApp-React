import React, { Component } from 'react';

import { Provider } from "react-redux";
import store from "../store";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../logic/Routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>

    );
  }
}

export default App;
