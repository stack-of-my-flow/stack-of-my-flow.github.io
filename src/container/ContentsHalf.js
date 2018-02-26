import React, { Component } from 'react';
import Content from '../container/Content.js';

class ContentsHalf extends Component {
  render() {
    return (
      <section id="contents-half">
        <ul>{contents}</ul>
      </section>
    );
  }
}

var contents = [];
var data = [
  {main: "Sub article 1", sub: 'Something about this sub article 1'},
  {main: "Sub article 2", sub: 'Something about this sub article 2'},
  {main: "Sub article 3", sub: 'Something about this sub article 3'},
  {main: "Sub article 4", sub: 'Something about this sub article 4'}
];
for(var i in data){
  contents.push(
    <li key={data[i].main}>
      <div>
        <Content half_main={data[i].main} half_sub={data[i].sub}></Content>
      </div>
    </li>
  );
}

export default ContentsHalf;