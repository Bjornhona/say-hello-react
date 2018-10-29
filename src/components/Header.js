import React, { Component } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Button from './Button';


class Header extends Component {
  render() {
    return (
      <div className="header container">
        <Navbar />
        <Intro />
        <Button />
        <img src={`${process.env.PUBLIC_URL}/images/react-logo.svg`} alt="React-logo" />
      </div>
    );
  }
}


export default Header;