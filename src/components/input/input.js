import React from 'react';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <input placeholder="请输入" />
    )
  }
}