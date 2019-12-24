import React from 'react';
import { Button, ButtonGroup } from '../../src/index.js';

export default class ButtonPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  onClick() {
    alert("点击按钮");
  }

  render() {
    return (
      <div className="page">
        <div className="h1">按钮</div>

        <fieldset><legend><a>类型</a></legend></fieldset>
        <Button title={'按钮'} type={"default"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"primary"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"info"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"success"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"warn"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"danger"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"link"} onClick={() => { this.onClick() }} />

        <fieldset><legend><a>大小</a></legend></fieldset>
        <Button title={'按钮'} size={"lg"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} size={"md"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} size={"sm"} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} size={"xs"} onClick={() => { this.onClick() }} />

        <fieldset><legend><a>圆角</a></legend></fieldset>
        <Button title={'圆角按钮'} type={"default"} radius={15} onClick={() => { this.onClick() }} />
        <Button title={'圆角按钮'} type={"primary"} radius={15} onClick={() => { this.onClick() }} />
        <Button title={'圆角按钮'} type={"info"} radius={15} onClick={() => { this.onClick() }} />
        <Button title={'圆角按钮'} type={"success"} radius={15} onClick={() => { this.onClick() }} />
        <Button title={'圆角按钮'} type={"warn"} radius={15} onClick={() => { this.onClick() }} />
        <Button title={'圆角按钮'} type={"danger"} radius={15} onClick={() => { this.onClick() }} />

        <fieldset><legend><a>禁用</a></legend></fieldset>
        <Button title={'按钮'} type={"default"} disabled={true} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"primary"} disabled={true} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"info"} disabled={true} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"success"} disabled={true} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"warn"} disabled={true} onClick={() => { this.onClick() }} />
        <Button title={'按钮'} type={"danger"} disabled={true} onClick={() => { this.onClick() }} />

        <fieldset><legend><a>图标</a></legend></fieldset>
        <Button title={'按钮'} size={"lg"} type={"primary"} icon="radio" onClick={() => { this.onClick() }} />
        <Button title={'按钮'} size={"md"} type={"primary"} icon="radio-active" onClick={() => { this.onClick() }} />
        <Button title={'按钮'} size={"sm"} type={"primary"} icon="radio-active-fill" onClick={() => { this.onClick() }} />
        <Button title={'按钮'} size={"xs"} type={"primary"} icon="radio" onClick={() => { this.onClick() }} />
        <br></br>
        <br></br>
        <Button title={'自定义'} size={"md"} type={"info"} icon={<i style={{ marginRight: '5px', fontSize: '100%' }} className="rk-icon rk-icon-radio-active"></i>} onClick={() => { this.onClick() }} />
        <Button type={"info"} icon="checkbox" onClick={() => { this.onClick() }} />
        <Button type={"info"} icon="checkbox-active" onClick={() => { this.onClick() }} />

        <fieldset><legend><a>按钮组</a></legend></fieldset>
        <ButtonGroup>
          <Button title={'按钮'} type={"success"} onClick={() => { this.onClick() }} />
          <Button title={'按钮'} type={"warn"} onClick={() => { this.onClick() }} />
          <Button title={'按钮'} type={"danger"} onClick={() => { this.onClick() }} />
        </ButtonGroup>
      </div >
    )
  }
}