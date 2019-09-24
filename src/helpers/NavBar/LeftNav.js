import React, { Component } from 'react'
import { Menu, Input } from 'antd';
import PropTypes from 'prop-types'

const { Search } = Input;

export class LeftNav extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          //todo do something about this
          style={{ width: 200 }}
        />
        <Menu.Item key="explore">
          <a href="#">explore</a>
        </Menu.Item>
        <Menu.Item key="start">
          <a href="#">start a project</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default LeftNav;

LeftNav.propTypes = {
  mode: PropTypes.string,
};
