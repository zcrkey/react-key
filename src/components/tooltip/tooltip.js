import React from 'react';
import PropTypes from 'prop-types';

export default class Tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    // label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    // vertical: PropTypes.bool,
    // labelStyle: PropTypes.object,
    // contentStyle: PropTypes.object
  };

  static defaultProps = {
    // vertical: false
  };
}