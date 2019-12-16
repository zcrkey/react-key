import React from 'react';
import { Link } from "react-router-dom";
import MainRouter from './main.router';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {

  }

  componentDidMount() {
    // 模式：development、production、test
    console.log("__NODE___：" + process.env.NODE_ENV);
  }

  componentWillUnmount() {

  }

  /**
   * 初始化全局数据
   */
  async initGlobalData() {

  }

  render() {
    return (
      <div className="key">
        <div className="key-menu">
          <Link to="/main/buttons">按钮</Link>
        </div>
        <div className="key-body">
          <MainRouter></MainRouter>
        </div>
      </div>
    );
  }
}