import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LeftFooter extends Component {
  render() {
    return (
      <div className="left-footer-container">
        <div className="left-footer-icon">
          <Link to="/">Icollab</Link>
        </div>
        <div className="left-footer-menu">
          <Link to="/">explore</Link>
          <Link to="/">start a project</Link>
          <Link to="/">login</Link>
          <Link to="/">signup</Link>
        </div>
      </div>
    )
  }
}

export default LeftFooter
