import React, { Component } from 'react';
import SideLanguage from '../container/SideLanguage.js';
import SideRelated from '../container/SideRelated.js';
import { firebaseDb } from '../firebase/';
import ReactDOM from 'react-dom';

const components = {
  "language" : SideLanguage,
  "related" : SideRelated
};

class SidePanel extends Component {
  initSide(props) {
    var pathName = 'article/' + props.id;
    localStorage.language = localStorage.language || 'english';
    var langStorage = localStorage.language.substring(0, 2);
    var sidePanel = document.getElementById("side-panel");
    sidePanel.innerHTML = "";
    var removes = sidePanel.querySelectorAll("[data-removal='true']");
    for (var e of removes) { e.parentNode.removeChild(e) }
    var side = firebaseDb.ref(pathName + "/side_" + langStorage);
    var self = props;
    side.on('value', function(snapshot) {
      const val = snapshot.val();
      for (var i in val) {
        const data = val[i];
        var section = document.createElement("section");
        section.id = "side-" + i;
        section.dataset.removal = true;
        sidePanel.appendChild(section);
        var props = {};
        for (var j in data) {
          props[j] = data[j];
          props["id"] = self.id;
          props["language"] = langStorage;
        }
        var element = React.createElement(components[i], props);
        ReactDOM.render(element, document.getElementById("side-" + i));
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.id) {
      this.initSide(nextProps);
    }
  }
  componentDidMount() {
    this.initSide(this.props);
  }
  render() {
    return (
      <section id="side-panel"></section>
    );
  }
}

export default SidePanel;