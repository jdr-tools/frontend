import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Groups from './components/Groups'
import Services from './components/Services'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <Link to="/services">Services</Link>
            <Link to="/groups">Groupes</Link>
          </p>
          <p>
            <Route path="/services" component={Services} />
            <Route path="/groups" component={Groups} />
          </p>
        </div>
      </Router>
    );
  }
}