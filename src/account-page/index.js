/**
 *
 */

import React, { Component } from 'react';
import ProgressCmp from '../progress-cmp';

/**
 *
 */

class AccountPage extends Component {

  /**
   *
   */

  constructor(props) {
    super(props);

    this.state = {
      reached: 56,
      target: 125
    }
  }

  /**
   *
   */

  render() {
    return (
      <div>
        <h1> Account Page </h1>
        <p> Popover progress component DEMO</p>

        <ProgressCmp
          reached={this.state.reached}
          target={this.state.target}>
            <a href="#"> Show Progress </a>
        </ProgressCmp>

      </div>
    );
  }

}

//
export default AccountPage;
