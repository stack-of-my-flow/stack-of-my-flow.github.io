import React, { Component } from 'react';
import { firebaseDb } from '../firebase/';

class ArticleHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { title : "" }
  }
  initArticleHeader(id){
    var pathName = 'article/' + id;
    localStorage.language = localStorage.language || 'english';
    var langStorage = localStorage.language.substring(0, 2);
    var articleHeader = document.getElementById("article-header");
    var articleTitle = document.getElementById("article-header-title");
    var title = firebaseDb.ref(pathName + "/" + langStorage);
    var self = this;
    title.on('value', function(snapshot) {
      var val = snapshot.val();
      self.setState({ title : val || "" });
      articleHeader.classList.add(langStorage);
      articleTitle.classList.add(langStorage);
      articleTitle.style.display = (val) ? "block" : "none";
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.id) {
      this.initArticleHeader(nextProps.id);
    }
  }
  componentDidMount() {
    this.initArticleHeader(this.props.id);
  }
  render() {
    return (
      <section id="article-header">
        <h1 id="article-header-title">{this.state.title}</h1>
      </section>
    );
  }
}

export default ArticleHeader;