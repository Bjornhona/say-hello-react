import React, { Component } from 'react';

class ArticleSingleWay extends Component {
  render() {
    return (
      <div className="article">
        <img src={`${process.env.PUBLIC_URL}/images/icon3.png`} alt="React-logo" />
        <h3>Single-Way</h3>
        <p>A set of inmutable values are passed to the component's.</p>
      </div>
    )
  }
}


export default ArticleSingleWay