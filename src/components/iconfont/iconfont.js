import React from 'react';
import '../../iconfont/iconfont.css';

export default class Iconfont extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props
    return (
      <i className={'rk-icon rk-icon-' + name} ></i >
    )
  }
}