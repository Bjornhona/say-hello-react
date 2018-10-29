import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={`${process.env.PUBLIC_URL}/images/ironhack-logo.svg`} alt="Logo-Ironhack" />
        <img src={`${process.env.PUBLIC_URL}/images/menu-top.svg`} alt="Burger-Menu" />
      </div>
    );
  }
}


export default Navbar;