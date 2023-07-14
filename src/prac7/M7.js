import React, { Component } from 'react'
import Clock from './Clock';
export default class M7 extends Component {
      constructor(props) {
            super(props);
            this.state = { show: true };
      }
      removeClock = () => {
            this.setState({ show: false });
      }
      render() {
            let myclock;
            if (this.state.show) {
                  myclock = <Clock />;
            };
            return (
                  <div>
                        {myclock}
                        <button type="button" onClick={this.removeClock}>Remove Clock </button>
                  </div>
            );
      }
}