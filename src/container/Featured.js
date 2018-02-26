import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentsFull from '../container/ContentsFull.js';

class Featured extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main id="featured">
        <ContentsFull></ContentsFull>
      </main>
    );
  }
}

export default Featured;