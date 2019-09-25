import React, { Component } from 'react';


import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';

import './StyleMainFooter.css';

export class MainFooter extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-left">
          <LeftFooter />
        </div>
        <div className="footer-right">
          <RightFooter />
        </div>
      </div>
    )
  }
}

export default MainFooter
