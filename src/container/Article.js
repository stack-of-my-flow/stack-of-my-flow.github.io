import React, { Component } from 'react';
import { hideMenu } from '../container/Util.js';
import ContentPanel from '../container/ContentPanel.js';
import SidePanel from '../container/SidePanel.js';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { id : this.props.match.params.id || "featured" }
  }
  componentDidMount() {
    var self = this;
    hideMenu();
    window.addEventListener("hashchange", function(){
      if (self.state.id !== self.props.match.params.id) {
        self.setState({ id : self.props.match.params.id });
      }
      var header = document.getElementsByTagName('header')[0];
      var main = document.getElementsByTagName('main')[0];
      var searchResult = document.getElementById('search-result');
      header.classList.remove('show-menu');
      if (main) {
        main.classList.remove('show-search');
      }
      if (searchResult) {
        if (window.location.hash === "#/") {
          searchResult.classList.remove('show');
          document.getElementById('search-input').value = "";
        }
      }
    }, false);
  }
  render() {
    return (
      <main id="article">
        <ContentPanel id={this.state.id}></ContentPanel>
        <SidePanel id={this.state.id}></SidePanel>
      </main>
    );
  }
}

export default Article;