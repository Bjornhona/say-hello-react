import React, { Component } from 'react';
import ArticleDeclarative from './Article-declarative';
import ArticleComponents from './Article-components';
import ArticleSingleWay from './Article-single-way';
import ArticleJSX from './Article-JSX'

class Section extends Component {
  render() {
    return (
      <div className='section container'>
        <ArticleDeclarative />
        <ArticleComponents />
        <ArticleSingleWay />
        <ArticleJSX />
      </div>
    )
  }
}


export default Section;