import React from 'react';
import { Link } from "react-router-dom";
import MainRouter from './main.router'
import styles from './main.module.scss'

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

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.menu}>
          <Link to="/main/home-page">首页</Link>
          <Link to="/main/button-page">按钮</Link>
          <Link to="/main/icon-page">图标</Link>
          <Link to="/main/form-page">表单</Link>
        </div>
        <div className={styles.centent}>
          <MainRouter></MainRouter>
        </div>
      </div>
    );
  }
}