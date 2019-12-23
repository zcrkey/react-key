import React from 'react';
import { FormItem, Input } from '../../src/index.js';

export default class FormPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    let { iconData } = this.state;
    return (
      <div className='page'>
        <div className='h1'>表单</div>

        <fieldset><legend><a>内联表单</a></legend></fieldset>
        <form style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <FormItem label='输入框' >
              <Input placeholder='请输入...'></Input>
            </FormItem>
            <FormItem label='密码框' >
              <Input type='password'></Input>
            </FormItem>
            <FormItem label='事件' >
              <Input
                onChange={(e) => {
                  console.log('onChange:', e);
                }}
                onFocus={(e) => {
                  console.log('onfocus:', e);
                }}
                onBlur={(e) => {
                  console.log('onblur:', e);
                }}
              ></Input>
            </FormItem>
          </div>
          <div style={{ width: '50%' }}>
            <FormItem label='数字框'>
              <Input type='number'></Input>
            </FormItem>
            <FormItem label='禁用框' >
              <Input placeholder='' disabled={true}></Input>
            </FormItem>
            <FormItem label='事件' >
              <Input
                others={
                  {
                    onChange: (e) => {
                      console.log('onChange:', e);
                    },
                    onFocus: (e) => {
                      console.log('onfocus:', e);
                    },
                    onBlur: (e) => {
                      console.log('onblur:', e);
                    }
                  }
                }
              ></Input>
            </FormItem>
          </div>
        </form>
        <fieldset><legend><a>块状表单</a></legend></fieldset>
        <form>
          <div style={{ width: '50%' }}>
            <FormItem label='输入框' vertical={true}>
              <Input placeholder='请输入...'></Input>
            </FormItem>
            <FormItem label='密码框' vertical={true}>
              <Input type='password'></Input>
            </FormItem>
            <FormItem label='数字框' vertical={true}>
              <Input type='number'></Input>
            </FormItem>
            <FormItem label='事件' vertical={true}>
              <Input
                onChange={(e) => {
                  console.log('onChange:', e);
                }}
                onFocus={(e) => {
                  console.log('onfocus:', e);
                }}
                onBlur={(e) => {
                  console.log('onblur:', e);
                }}
              ></Input>
            </FormItem>
            <FormItem label='禁用框' vertical={true}>
              <Input placeholder='' disabled={true}></Input>
            </FormItem>
          </div>
        </form>
      </div >
    )
  }
}