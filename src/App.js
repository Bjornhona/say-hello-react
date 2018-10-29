import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
