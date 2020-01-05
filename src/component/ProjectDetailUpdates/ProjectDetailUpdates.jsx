import React, { Component } from 'react';
import { Timeline } from 'antd';

import { UpdateBox } from '../../helpers';

import './StyleProjectDetailUpdates.css';

export class ProjectDetailUpdates extends Component {
  render() {
    return (
      <div className="projectdetail-updates-container">
        <div className="projectdetail-main">
          {/* todo add render method and animation here */}
          <UpdateBox />
        </div>
        <div className="projectdetail-sider">
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>

        </div>
      </div>
    )
  }
}

export default ProjectDetailUpdates;
