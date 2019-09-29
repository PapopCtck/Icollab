import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class RightNav extends Component {
  render() {
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
