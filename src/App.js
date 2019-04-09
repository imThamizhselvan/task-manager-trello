import React, { Component } from 'react';
import Board from './components/Board';
import history from './history';
import { Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/"  component={Board} />
      </Router>
    );
  }
}

export default App;
