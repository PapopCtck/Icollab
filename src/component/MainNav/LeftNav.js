import React, { Component } from 'react'
import { Menu, Input, Select } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// const { Search } = Input;

const { Option } = Select;

export class LeftNav extends Component {
  onChange = value => {
    this.props.setLang(value);
    window.location.reload();
  }
  render() {
    const { pathname } = this.props.location;
    return (
      <Menu mode={this.props.mode} selectable={false} onClick={this.props.onClick}>
        {/* <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          //todo do something about this
          style={{ width: 200 }}
        /> */}
        <Select defaultValue="en" value={this.props.appLang} style={{ width: 120, margin: '14px' }} onChange={this.props.setLang}>
          <Option value="en">English (US)</Option>
          <Option value="th">ไทย (TH)</Option>
        </Select>
        <Menu.Item key="explore">
          <Link to="/explore">explore</Link>
        </Menu.Item>
        <Menu.Item key="start">
          {
            pathname === '/createproject' ? <Link to="/createproject" onClick={() => window.location.reload()}>start a project</Link> : <Link to="/createproject">start a project</Link>
          }

        </Menu.Item>
      </Menu >
    )
  }
}

export default withRouter(LeftNav);

LeftNav.propTypes = {
  mode: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
