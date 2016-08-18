/**
 *
 */

import React, { Component } from 'react';

/**
 *
 */

class Popover extends Component {

  /**
   *
   */

  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    }
  }

  /**
   *
   */

  componentDidMount() {
    const { target, reached } = this.props;
    const reachedProgress = (reached/target)*100;
    let progress = 1;

    const nextTick = () => {
      if (progress >= reachedProgress) {
        clearInterval(this.timerId);
      }
      else {
        progress += 1;
        this.setState({
          progress
        });
      }
    }

    this.timerId = setInterval(nextTick, 10);
  }

  /**
   *
   */

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  /**
   *
   */

  render() {
    const {
      className,
      target,
      reached
    } = this.props;

    return (
      <div className={className}>
        <div className="popover-titlebar">Your Progress</div>

        <div className="popover-content">
          <div className="popover-content-inner">

            <div className="popover-progress-info">
              <span>Reached: </span>
              <span className="bar-wrapper">
                <span
                  style={{width: `${this.state.progress}%`}}
                  className="bar">&nbsp;
                </span>
              </span>
              <span className="target">
                Target <br />
                {`$${target}`}
              </span>
            </div>

            <p>{`You need $${target - reached} more to reach your target.`}</p>
          </div>
        </div>

      </div>
    );
  }
}

//
export default Popover;
