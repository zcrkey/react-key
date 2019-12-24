import React from 'react';
import { Icon } from '../../src/index.js';

export default class IconPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      iconData: [
        'checkbox',
        'checkbox-active',
        'checkbox-active-fill',
        'radio',
        'radio-active',
        'radio-active-fill',
      ]
    };
  }

  componentDidMount() {
  }

  renderIcon(item, index) {
    return (
      <div key={index} className="rk-icon-box-item">
        <Icon name={item}></Icon>
        <label>{item}</label>
      </div>
    );
  }

  render() {
    let { iconData } = this.state;
    return (
      <div className="page">
        <div className="h1">图标</div>
        <fieldset><legend><a>图标库</a></legend></fieldset>
        <div className={'rk-icon-box'}>
          {iconData.map((item, index) => this.renderIcon(item, index))}
        </div>
      </div>
    )
  }
}