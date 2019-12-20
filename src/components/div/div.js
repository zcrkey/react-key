import React from 'react';
import styles from '../../scss/div.module.scss';

export default class Div extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.bg}></div>
    )
  }
}