import React from 'react';
import { Iconfont } from '../../src/index.js';

export default class IconfontPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="h1">图标</div>
        <Iconfont name={'danxuan'} size={'30px'}></Iconfont>
        <Iconfont name={'yuanxingweixuanzhong'} size={'30px'}></Iconfont>
        <Iconfont name={'fangxingxuanzhong'} size={'30px'}></Iconfont>
        <Iconfont name={'fangxingweixuanzhong'} size={'30px'}></Iconfont>
      </div >
    )
  }
}