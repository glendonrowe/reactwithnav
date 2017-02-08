import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarInstance from './components/Navbar';
import ContactList from './components/ContactList';

const App = ({name, version}) =>
  <div className="App">
    <NavbarInstance/>
    <ContactList />
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>This is a test by {name} for {version}</p>
  </div>

export default App;
