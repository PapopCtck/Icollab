import React, { Component } from 'react';
import { Checkbox, Divider, Select, Avatar, Icon } from 'antd';
import PropTypes from 'prop-types';

import './StyleProjectDetailApplicants.css';

const { Option } = Select;

export class ProjectDetailApplicants extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div>
        <div className="projectpanel-header">
          <span className="projectpanel-left">
            <Checkbox />
            <Divider type="vertical" />
            <Select
              style={{ width: 120 }}
              placeholder="options"
            >
              <Option value="hide">Hide</Option>
              <Option value="mark">Mark as read</Option>
              <Option value="delete">Delete</Option>
            </Select>
          </span>
          <span className="projectpanel-right">
            <span className={'projectpanel-right-sortby regular ' + theme + '-text'}>Sort by</span>
            <Select
              style={{ width: 120 }}
              defaultValue="trending"
            >
              <Option value="trending">Trending</Option>
              <Option value="dateAdded">Date Added</Option>
              <Option value="lastUpdate">Last Update</Option>
            </Select>
          </span>
        </div>
        <div className="projectdetail-applicants-userbar-container">
          {/* todo render this as a list */}
          <UserBar theme={theme} />
          <UserBar theme={theme} />
        </div>
      </div>
    )
  }
}

export default ProjectDetailApplicants;

ProjectDetailApplicants.propTypes = {
  theme: PropTypes.string,
}

const UserBar = ({ theme }) => (
  <div className="userbar-container">
    <Checkbox />
    <Divider type="vertical" />
    <Avatar icon="user" />
    <div className="userbar-userinfo-container">
      <span className={'bold ' + theme + '-text'}>
        Daniel Tucker
      </span>
      <span className={theme + '-text'}>
        Programmer
      </span>
      <span className={theme + '-text'}>
        3/11/20
      </span>
      <span className={theme + '-text'}>
        Computer engineering
      </span>
      <Icon className={theme + '-text'} type="more" rotate={90} style={{ fontSize: 25, verticalAlign: 'middle' }} />
    </div>
    
  </div>
);
