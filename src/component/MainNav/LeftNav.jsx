import React, { Component } from 'react'
import { Menu, Select } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import content from './LangNav';

const { Option } = Select;

export class LeftNav extends Component {
  onChange = value => {
    this.props.setLang(value);
    window.location.reload();
  }
  render() {
    const { pathname } = this.props.location;
    const { appLang } = this.props;
    return (
      <Menu mode={this.props.mode} selectable={false} onClick={this.props.onClick}>
        <Select defaultValue="en" value={appLang} style={{ width: 120, margin: '14px' }} onChange={this.props.setLang}>
          <Option value="en">English (US)</Option>
          <Option value="th">ไทย (TH)</Option>
        </Select>
        <Menu.Item key="explore">
          <Link to="/explore">{content[appLang].explore}</Link>
        </Menu.Item>
        <Menu.Item key="start">
          {
            pathname === '/createproject' ? <Link to="/createproject" onClick={() => window.location.reload()}>{content[appLang].startProject}</Link> : <Link to="/createproject">{content[appLang].startProject}</Link>
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
  setLang: PropTypes.func,
  appLang: PropTypes.string,
};
