import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './container/Header.js';
import Footer from './container/Footer.js';
import About from './container/About.js';
import Article from './container/Article.js';
import './Custom.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="stack of my flow"></Header>
        <Route exact path="/" component={About} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/article/:id" component={Article} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
