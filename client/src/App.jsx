import React, { Component } from 'react';
import Router from '../router.jsx';
//import logo from './logo.svg';
import  Header from './header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router></Router>
      </div>
    );
  }
}

export default App;
