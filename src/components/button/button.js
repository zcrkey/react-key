import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import Icon from '../icon/icon.js';

/**
 * 按钮组件
 *
 * @export
 * @class Button
 * @extends {React.Component}
 * @static
 * @param {*} formType 表单类型
 * @param {*} type 类型
 * @param {*} size 大小
 * @param {*} radius 圆角
 * @param {*} icon 图标
 * @param {*} title 标题
 * @param {*} style 样式
 * @param {*} disabled 禁用
 * @param {*} onClick 点击
 */
export default class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    formType: PropTypes.oneOf(['button', 'reset', 'submit']),
    type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warn', 'danger', 'link']),
    size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    disabled: PropTypes.bool,
    radius: PropTypes.number,
    onClick: PropTypes.func
  };

  static defaultProps = {
    formType: 'button',
    type: 'default',
    size: 'md',
    disabled: false
  };

  /**
   * 生成类样式
   *
   * @returns sring
   * @memberof Button
   */
  buildClass() {
    let { type, size } = this.props;
    return Classnames(
      'rk-btn',
      'rk-btn-' + size,
      'rk-btn-' + type,
    );
  }

  /**
   * 生成图标
   *
   * @returns dom
   * @memberof Button
   */
  buildIcon() {
    let { icon, title } = this.props;
    if (typeof icon == 'string') {
      return <Icon name={icon} size={'100%'} style={title ? { marginRight: '5px' } : {}}></Icon>
    } else if (typeof icon == 'object') {
      return icon
    } else {
      return null;
    }
  }

  render() {
    let { icon, formType, title, style, radius, disabled, children, onClick, others } = this.props;
    if (radius != null) {
      style = style || {};
      style.borderRadius = radius + 'px';
    }
    return (
      <button
        style={style}
        className={this.buildClass()}
        type={formType}
        disabled={disabled}
        onClick={() => { !!onClick && onClick() }}
        {...others}
      >
        {!!icon ? this.buildIcon() : null}
        {children ? children : title}
      </button >
    )
  }
}