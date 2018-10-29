import React, { Component } from 'react';

class ArticleDeclarative extends Component {
  render() {
    return (
      <div className="article">
        <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="React-logo" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
    )
  }
}


export default ArticleDeclarative