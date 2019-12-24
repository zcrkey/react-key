import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import '../../scss/form.scss';

/**
 * 表单项组件
 *
 * @export
 * @class FormItem
 * @extends {React.Component}
 * @param {*} label 标签
 * @param {*} vertical 垂直
 * @param {*} labelStyle 标签样式
 * @param {*} contentStyle 内容样式
 */
export default class FormItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    vertical: PropTypes.bool,
    labelStyle: PropTypes.object,
    contentStyle: PropTypes.object
  };

  static defaultProps = {
    vertical: false
  };

  buildFormClass() {
    let { vertical } = this.props;
    return Classnames({
      'rk-form-item': true,
      'vertical': vertical,
    });
  }

  render() {
    let { label, labelStyle, contentStyle, children } = this.props;
    let required = !!children && !!children.props && !!children.props.required ? true : false
    return (
      <div style={labelStyle} className={this.buildFormClass()}>
        {/* TODO:title、Tips */}
        <label className='rk-form-label rk-ellipsis'>
          {required ? <span className={'rk-star'}>*</span> : null}
          {label}
        </label>
        <div style={contentStyle} className='rk-form-content'>
          {children}
        </div>
      </div>
    )
  }
}