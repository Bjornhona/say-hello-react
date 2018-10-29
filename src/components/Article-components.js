import React, { Component } from 'react';

class ArticleComponents extends Component {
  render() {
    return (
      <div className="article">
        <img src={`${process.env.PUBLIC_URL}/images/icon2.png`} alt="React-logo" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
    )
  }
}


export default ArticleComponents