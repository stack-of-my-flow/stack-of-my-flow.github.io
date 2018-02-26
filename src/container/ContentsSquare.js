import React, { Component } from 'react';
import ContentLabel from '../container/ContentLabel.js';

class ContentsSquare extends Component {
  constructor(props) {
    super(props);
    this.state = { contents : [] }
  }
  componentDidMount() {
    var contents = [];
    var data = this.props.data;
    for(var i in data){
      contents.push(
        <li key={data[i].main}>
          <a href={(data[i].href.indexOf("http") !== -1) ? data[i].href : "#" + data[i].href} target={(data[i].href.indexOf("http") !== -1) ? "_blank" : ""}>
            <div style={{backgroundImage:"url("+ data[i].image +")",backgroundSize:data[i].size}}>
              <ContentLabel main={data[i].main} sub={data[i].sub}></ContentLabel>
            </div>
          </a>
        </li>
      );
    }
    this.setState({ contents : contents });
  }
  render() {
    return (
      <section id="contents-square">
        <ul>{this.state.contents}</ul>
      </section>
    );
  }
}

export default ContentsSquare;