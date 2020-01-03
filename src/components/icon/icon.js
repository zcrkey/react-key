import React from 'react';
import PropTypes from 'prop-types';

/**
 * 图表
 *
 * @export
 * @class Icon
 * @param {string} name 名称
 * @param {number|string} size 大小
 * @param {string} color 颜色
 * @param {object} style 样式
 * @extends {React.Component}
 */
export default class Icon extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {

  };

  /**
   * 生成样式
   *
   * @returns object
   * @memberof Icon
   */
  buildStyle() {
    let { size, color, style = {} } = this.props;
    size ? style['fontSize'] = size : null;
    color ? style['color'] = color : null;
    return style;
  }

  render() {
    const { name } = this.props;
    return (
      <i className={'rk-icon rk-icon-' + name} style={this.buildStyle()}></i >
    )
  }
}