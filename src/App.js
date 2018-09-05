import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/navbar/navbar.jsx';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />   

        <Router />

      </div>
    );
  }
}

export default App;
