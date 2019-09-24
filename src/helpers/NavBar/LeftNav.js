import React, { Component } from 'react'
import { Menu, Input } from 'antd';


const { Search } = Input;

export class LeftNav extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
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

export default LeftNav
