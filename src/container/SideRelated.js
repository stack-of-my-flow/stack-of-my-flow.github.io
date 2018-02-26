import React, { Component } from 'react';
import SideRelatedContent from '../container/SideRelatedContent.js';
import { firebaseDb } from '../firebase/';
import ReactDOM from 'react-dom';

class SideRelated extends Component {
  initRelated(props) {
    var pathName = 'article/' + props.id;
    localStorage.language = localStorage.language || 'english';
    var langStorage = localStorage.language.substring(0, 2);
    var sideRelated = document.getElementById("related");
    sideRelated.innerHTML = "";
    var removes = sideRelated.querySelectorAll("[data-removal='true']");
    for (var e of removes) { e.parentNode.removeChild(e) }
    var related = firebaseDb.ref(pathName + "/side_"+ langStorage +"/related");
    related.on('value', function(snapshot) {
      const val = snapshot.val();
      for (var i in val) {
        var data = val[i];
        var parent = document.createElement("li");
        parent.classList.add("side-related-content");
        parent.classList.add(langStorage);
        sideRelated.appendChild(parent);
        var props = {
          title : data.split(":::")[0].split('-').join(' '),
          href : '#' + data.split(":::")[1],
          language : langStorage,
          target : (data.indexOf('http') !== -1) ? '_blank' : ''
        };
        var child = React.createElement(SideRelatedContent, props);
        ReactDOM.render(child, parent);
      }
    });
  }
  componentDidMount() {
    this.initRelated(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.id) {
      this.initRelated(nextProps);
    }
  }
  render() {
    return (
      <section className={this.props.language}>
        <h2 className="en">Related</h2>
        <h2 className="ja">関連</h2>
        <ul id="related"></ul>
      </section>
    );
  }
}

export default SideRelated;