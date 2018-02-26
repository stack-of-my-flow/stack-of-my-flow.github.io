import React, { Component } from 'react';
import Content from '../container/Content.js';

class ContentsFull extends Component {
  render() {
    return (
      <section id="contents-full">
        <ul>{contents}</ul>
      </section>
    );
  }
}

var contents = [];
var data = [
  {main: "Career", sub: '- about my career -', href: '/article/career'},
  {main: "Certification", sub: '- about my certification -', href: '/article/certification'},
  {main: "Activity", sub: '- about my activities -', href: '/article/activity'},
];
for(var i in data){
  var href = data[i].href ? "#" + data[i].href : "";
  contents.push(
    <a style={{textDecoration:"none"}} key={i} href={(href.indexOf("http") !== -1 || href === "") ? href.split("#").join("") : href} target={(href.indexOf("http") !== -1) ? "_blank" : ""}>
      <li style={{backgroundImage:"url("+ data[i].image +")",height:data[i].height,opacity:data[i].opacity}}>
        <div>
          <Content full_main={data[i].main} full_sub={data[i].sub}></Content>
          <div></div>
        </div>
      </li>  
    </a>
  );
}

export default ContentsFull;