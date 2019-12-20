import React from 'react';
import styles from '../../scss/input.module.css';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input className={styles.input} placeholder="请输入" />
      </div>
    )
  }
}