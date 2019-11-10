import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCookie, deleteCookie } from '../../helpers';

class RightNav extends Component {
  render() {
    if (getCookie('icollab_token')) {
      return (
        <Menu mode={this.props.mode} selectable={false}>
          <Menu.Item key="logout">
            <Link to="/" onClick={() => deleteCookie('icollab_token')}>Logout</Link>
          </Menu.Item>
        </Menu>
      )
    }
    return (
      <Menu mode={this.props.mode} selectable={false}>
        <Menu.Item key="signup">
          <Link to="/register">Signup</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightNav;

RightNav.propTypes = {
  mode: PropTypes.string,
};
