import React from 'react';
import { Button } from '../../src/index.js';

export default class ButtonPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="h1">按钮</div>
        <Button text={'默认按钮'} />
        <Button type={'primary'} text={'按钮一'} />
        <Button type={'normal'} text={'按钮二'} />
        <Button type={'warm'} text={'按钮三'} />
        <Button type={'danger'} text={'按钮四'} />
        <Button type={'disabled'} text={'按钮五'} />
      </div >
    )
  }
}