import React, { Component } from 'react';
import { hideMenu, setFooterOpacity, setScrollStatus } from '../container/Util.js';
import ContentsSquare from '../container/ContentsSquare.js';
import { firebaseDb } from '../firebase/';
import ReactDOM from 'react-dom';

class About extends Component {
  initAbout() {
    localStorage.language = localStorage.language || 'english';
    var language = localStorage.language.substring(0, 2);
    var aboutTag = document.getElementById("about");
    var about = firebaseDb.ref("list/" + language);
    var self = this;
    about.on('value', function(snapshot) {
      const val = snapshot.val();
      if (aboutTag && val) {
        var squareTag = document.createElement("section");
        squareTag.id = "contents-square";
        squareTag.classList.add(language);
        aboutTag.innerHTML = "";
        aboutTag.appendChild(squareTag);
        const square = React.createElement(ContentsSquare, {data : val.square});
        ReactDOM.render(square, squareTag);
        setScrollStatus();
        setFooterOpacity(1);
      }
    });
  }
  componentDidMount() {
    hideMenu();
    setFooterOpacity(0);
    this.initAbout();
    var self = this;
    window.addEventListener('resize', function (event) {
      setScrollStatus();
    });
  }
  render() {
    const data = [
      {main: "LinkedIn", size: 'cover', image: 'https://c1.staticflickr.com/5/4475/36992969453_f65472041a_b.jpg', href: 'https://www.linkedin.com/in/kohei-shingai-6a414a89/'},
      {main: "GitHub", size: 'cover', image: 'https://c1.staticflickr.com/5/4479/36953070364_f09ddc8cec_b.jpg', href: 'https://github.com/KoheiShingaiHQ'},
      {main: "UI/UX", size: 'cover', image: 'https://c1.staticflickr.com/5/4443/36992968563_7a4dae6a8f_b.jpg', href: '/article/ui-ux'},
      {main: "Prototyping", size: 'cover', image: 'https://c1.staticflickr.com/5/4453/23810866228_40922c1f47_b.jpg', href: '/article/prototyping'},
      {main: "Open Source", size: 'auto', image: 'https://www.toptal.com/designers/subtlepatterns/patterns/footer_lodyas.png', href: '/article/open-source'},
      {main: "Java", size: 'cover', image: 'https://c1.staticflickr.com/5/4506/36953070014_8be195a378_z.jpg', href: '/article/java-career'},
      {main: "Certification", size: 'cover', image: 'https://c1.staticflickr.com/5/4476/36992969803_f40031f972_b.jpg', href: '/article/certification'},
      {main: "Activity", size: 'cover', image: 'https://c1.staticflickr.com/5/4445/36992968773_05810c4e15_k.jpg', href: '/article/activity'},
      {main: "Data", size: 'cover', image: 'https://c1.staticflickr.com/5/4493/36992968663_9d454b1722_b.jpg', href: 'https://docs.google.com/spreadsheets/d/1kC_j4cWM6I8czctA1HsqlXTqT79MGkA6SmRsFrAIMB8/edit?usp=sharing'}
    ];
    return (
      <main id="about"></main>
    );
  }
}

export default About;