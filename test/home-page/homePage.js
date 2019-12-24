import React from 'react';
import { Div } from '../../src/index.js';
import minImages from '../../src/images/min.png';
import maxImages from '../../src/images/max.png';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="page">
        <div className="h1">首页</div>
        <img src={minImages}></img>
        <img src={maxImages} width='84' height='84'></img>
        <br />
        <Div></Div>
      </div >
    )
  }
}