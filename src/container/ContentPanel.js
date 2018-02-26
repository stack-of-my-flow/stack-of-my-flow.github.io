import React, { Component } from 'react';
import ArticleHeader from '../container/ArticleHeader.js';
import ContentTimeline from '../container/ContentTimeline.js';
import ContentGithub from '../container/ContentGithub.js';
import ContentFeatured from '../container/ContentFeatured.js';
import { firebaseDb } from '../firebase/';
import ReactDOM from 'react-dom';

const components = {
  "timeline" : ContentTimeline,
  "github" : ContentGithub,
  "featured" : ContentFeatured
};

class ContentPanel extends Component {
  initContent(id) {
    var pathName = 'article/' + id;
    document.getElementsByTagName("footer")[0].style.display = "none";
    localStorage.language = localStorage.language || 'english';
    var langStorage = localStorage.language.substring(0, 2);
    var contentPanel = document.getElementById("content-panel");
    var removes = contentPanel.querySelectorAll("[data-removal='true']")
    for (var e of removes) { e.parentNode.removeChild(e) }
    const hue = firebaseDb.ref(pathName + "/hue");
    hue.on('value', function(snapshot) {
      const val = snapshot.val() || 0;
      contentPanel.style.filter = "hue-rotate(" + val + "deg)";
    });
    const article = firebaseDb.ref(pathName + "/content_" + langStorage);
    article.on('value', function(snapshot) {
      const val = snapshot.val();
      for (var i in val) {
        const data = val[i];
        var section = document.createElement("section");
        var sectionId = (data.article || data.revision || data.file || data.project);
        section.id = "content-" + sectionId;
        section.dataset.removal = true;
        contentPanel.appendChild(section);
        var props = {};
        for (var j in data) {
          props[j] = data[j];
          props["id"] = sectionId;
          props["hue"] = contentPanel.style.filter;
          props["language"] = langStorage;
        }
        var element = React.createElement(components[data.type], props);
        ReactDOM.render(element, document.getElementById("content-" + sectionId));
      }
      document.getElementsByTagName("footer")[0].style.display = "block";
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.id) {
      this.initContent(nextProps.id);
    }
  }
  componentDidMount() {
    this.initContent(this.props.id);
  }
  componentWillMount() {
  }
  render() {
    return (
      <article id="content-panel">
        <ArticleHeader id={this.props.id} language={this.props.language}></ArticleHeader>
      </article>
    );
  }
}

export default ContentPanel;