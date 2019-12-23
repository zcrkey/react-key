import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/form.scss';
/**
 * 输入框组件
 *
 * @export
 * @class Input
 * @extends {React.Component}
 * @param {*} type 类型（text,number,password）
 * @param {*} disabled 禁用
 * @param {*} onChange 值被改变时
 * @param {*} onBlur 失去焦点
 * @param {*} onFocus 获取焦点
 */
export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'password']),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
  };

  static defaultProps = {
    type: 'text',
    placeholder: '请输入',
    disabled: false
  };

  render() {
    let { type, placeholder, disabled, onChange, onBlur, onFocus, others } = this.props;
    return (
      <input
        className={'rk-input'}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => { !!onChange && onChange(e) }}
        onBlur={(e) => { !!onBlur && onBlur(e) }}
        onFocus={(e) => { !!onFocus && onFocus(e) }}
        {...others} />
    )
  }
}