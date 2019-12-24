import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/form.scss';

/**
 * 输入框组件
 *
 * @export
 * @class Input
 * @extends {React.Component}
 * @param {*} name 字段
 * @param {*} value 值
 * @param {*} parent 父类
 * @param {*} formDataField 表单数据字段
 * @param {*} type 类型（text,number,password）
 * @param {*} disabled 禁用
 * @param {*} readonly 只读
 * @param {*} required 必填
 * @param {*} onChange 值被改变时
 * @param {*} onBlur 失去焦点
 * @param {*} onFocus 获取焦点
 * @param {*} others 其他
 */
export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    parent: PropTypes.any.isRequired,
    value: PropTypes.any,
    formDataField: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    readonly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    others: PropTypes.object
  };

  static defaultProps = {
    formDataField: "formData",
    type: 'text',
    placeholder: '请输入',
    disabled: false,
    readonly: false,
    required: false
  };

  /**
   * 值发生改变
   *
   * @param {*} e
   * @memberof Input
   */
  _onChange(e) {
    let { name, formDataField, parent, disabled, readonly, onChange } = this.props;
    if (!!!disabled && !!!readonly) {
      let value = e.target.value
      // console.log('input_onChange:', value);
      if (!!onChange && typeof onChange == 'function') {
        onChange(name, value);
      } else if (!!parent) {
        let formData = parent.state[formDataField] || {};
        formData[name] = value;
        parent.setState({
          [formDataField]: formData
        });
      }
    }
  }

  /**
   * 获取焦点
   *
   * @param {*} e
   * @memberof Input
   */
  _onFocus(e) {
    let { disabled, readonly } = this.props;
    if (!!!disabled && !!!readonly) {
      let value = e.target.value
      console.log('input_onFocus:', value);
    }
  }

  /**
   * 失去焦点
   *
   * @param {*} e
   * @memberof Input
   */
  _onBlur(e) {
    let { disabled, readonly, onBlur } = this.props;
    if (!!!disabled && !!!readonly) {
      let value = e.target.value
      console.log('input_onBlur:', value);
      if (!!onBlur && typeof onBlur == 'function') {
        onBlur(name, value);
      } else {

      }
      // let verifyInfo = FormDataVerifyUtils.verifyData(inputValue, title, {
      //   isEmpty: isEmpty,
      //   verifyType: verifyType
      // });
      // if (!!verifyInfo.msg) {
      //   FormDataVerifyUtils.showVerifyInfo(this, verifyInfo);
      // }
    }
  }

  render() {
    let { type, name, value, placeholder, disabled, readonly, required, others } = this.props;
    return (
      <input
        className={'rk-input'}
        type={type}
        name={name}
        value={value ? value : ''}
        placeholder={placeholder}
        disabled={!!disabled}
        readOnly={!!readonly}
        required={!!required}
        onChange={(e) => { this._onChange(e) }}
        onBlur={(e) => { this._onBlur(e) }}
        onFocus={(e) => { this._onFocus(e) }}
        {...others} />
    )
  }
}