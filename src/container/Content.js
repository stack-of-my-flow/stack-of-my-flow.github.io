import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <h2>{this.props.full_main ? this.props.full_main : ""}</h2>
        <h3>{this.props.full_sub ? this.props.full_sub : ""}</h3>
        <h4>{this.props.half_main ? this.props.half_main : ""}</h4>
        <h5>{this.props.half_sub ? this.props.half_sub : ""}</h5>																 
      </div>
    );
  }
}

export default Content;