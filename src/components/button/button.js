import React from 'react';
import styles from '../../scss/button.module.scss';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick() {
    alert("点击");
  }

  render() {
    let { type, text } = this.props;
    return (
      <button className={styles.button + " " + styles['button-' + type]} onClick={() => { this.onClick() }}>{text ? text : ''}</button>
    )
  }
}