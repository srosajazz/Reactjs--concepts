import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: ['Node.JS', 'ReactJS', 'React Native'],
  };
  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>Native</li>
      </ul>
    );
  }
}

export default TechList;
