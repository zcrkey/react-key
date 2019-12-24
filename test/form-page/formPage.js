import React from 'react';
import { FormItem, Input } from '../../src/index.js';

export default class FormPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  componentDidMount() {
  }

  render() {
    let { formData } = this.state;
    return (
      <div className='page'>
        <div className='h1'>表单</div>
        <pre>
          <span>输入框input、 </span>
          <span>文本框textarea、 </span>
          <span>单选框radio、 </span>
          <span>复选框checkbox、 </span>
          <span>下拉框select、 </span>
          <span>多选下拉框multiple-select、 </span>
          <span>联动选择框、 </span>
          <span>树形选择框tree-select、 </span>
          <span>日期选择框date-select、 </span>
          <span>时间选择框time-select、 </span>
          <span>开关switch、 </span>
          <span>评分rate、 </span>
          <span>上传upload、 </span>
          <span>滑块slider</span>
        </pre>

        <fieldset><legend><a>内联表单</a></legend></fieldset>
        <form style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>

            <FormItem label={(formData.test ? formData.test + ' ' : '') + '数据绑定'} >
              <Input parent={this} name="test" value={formData.test} required placeholder='请输入...'></Input>
            </FormItem>

            <FormItem label='输入框' >
              <Input name="text" placeholder='请输入...'></Input>
            </FormItem>
            <FormItem label='密码框' >
              <Input name="password" type='password'></Input>
            </FormItem>
            <FormItem label='事件' >
              <Input
                name="event"
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
              <Input name="number" type='number'></Input>
            </FormItem>
            <FormItem label='必填框' >
              <Input name="required" placeholder='' required></Input>
            </FormItem>
            <FormItem label='禁用框' >
              <Input name="disabled" placeholder='' disabled></Input>
            </FormItem>
            <FormItem label='只读框' >
              <Input name="readonly" placeholder='' readonly></Input>
            </FormItem>
            <FormItem label='事件' >
              <Input
                name="others"
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
              <Input name="text" placeholder='请输入...'></Input>
            </FormItem>
            <FormItem label='密码框' vertical={true}>
              <Input name="password" type='password'></Input>
            </FormItem>
            <FormItem label='数字框' vertical={true}>
              <Input name="number" type='number'></Input>
            </FormItem>
            <FormItem label='事件' vertical={true}>
              <Input
                name="event"
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
              <Input name="disabled" placeholder='' disabled={true}></Input>
            </FormItem>
          </div>
        </form>
      </div >
    )
  }
}