import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LeftFooter extends Component {
  render() {
    return (
      <div className="left-footer-container">
        <div className="left-footer-icon bold">
          <Link to="/">Icollab</Link>
        </div>
        <div className="left-footer-menu">
          <Link className="left-footer-menuitem" to="/">explore</Link>
          <Link className="left-footer-menuitem" to="/">start a project</Link>
          <Link className="left-footer-menuitem" to="/login">login</Link>
          <Link className="left-footer-menuitem" to="/register">signup</Link>
        </div>
      </div>
    )
  }
}

export default LeftFooter
