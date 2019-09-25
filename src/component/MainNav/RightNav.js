import React, { Component } from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types'


class RightNav extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="mail">
          <a href="">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightNav;

RightNav.propTypes = {
  mode: PropTypes.string,
};
