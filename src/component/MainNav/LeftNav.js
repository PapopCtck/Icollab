import React, { Component } from 'react'
import { Menu, Input } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Search } = Input;

export class LeftNav extends Component {
  render() {
    return (
      <Menu mode={this.props.mode} selectable={false}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          //todo do something about this
          style={{ width: 200 }}
        />
        <Menu.Item key="explore">
          <Link to="/explore">explore</Link>
        </Menu.Item>
        <Menu.Item key="start">
          <Link to="/">start a project</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default LeftNav;

LeftNav.propTypes = {
  mode: PropTypes.string,
};
