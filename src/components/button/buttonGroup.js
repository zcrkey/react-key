import React from 'react';
import '../../scss/button.scss';

/**
 * 按钮组组件
 *
 * @export
 * @class ButtonGroup
 * @extends {React.Component}
 */
export default class ButtonGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {

  };

  static defaultProps = {
  };

  render() {
    let { children } = this.props;
    return (
      <div className='rk-btn-group'>
        {children ? children : title}
      </div>
    )
  }
}