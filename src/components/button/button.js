import React from 'react';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick() {
    alert("点击");
  }

  render() {
    return (
      <button onClick={() => { this.onClick() }}>我是按钮 ^^</button>
    )
  }
}