import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import Main from './components/Main'
import DrawerMenu from './components/DrawerMenu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App demo-layout-transparent mdl-layout mdl-js-layout">
        <Navbar />
        <Main />
        <DrawerMenu />
      </div>
    );
  }
}

export default App;