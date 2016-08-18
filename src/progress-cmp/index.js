/**
 *
 */

import React, { Component } from 'react';
import Popover from './popover';
import './styles.css';

/**
 *
 */

class ProgressCmp extends Component {

  /**
   *
   */

  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  /**
   *
   */

  show() {
    this.setState({
      show: true
    });
  }

  /**
   *
   */

  hide() {
    this.setState({
      show: false
    });
  }

  /**
   *
   */

  render() {
    const {
      children,
      reached,
      target
    } = this.props;

    return (
      <div
        className="progress-cmp"
        onMouseEnter={this.show.bind(this)}
        onMouseLeave={this.hide.bind(this)}>
        {children}
        {
          this.state.show
          && <Popover
              reached={reached}
              target={target}
              className="popover" />
        }
      </div>
    );
  }
}

//
export default ProgressCmp;
