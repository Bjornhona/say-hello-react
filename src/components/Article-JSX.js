import React, { Component } from 'react';

class ArticleJSX extends Component {
  render() {
    return (
      <div className="article">
        <img src={`${process.env.PUBLIC_URL}/images/icon4.png`} alt="React-logo" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    )
  }
}


export default ArticleJSX