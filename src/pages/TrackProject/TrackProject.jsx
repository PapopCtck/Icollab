import React, { Component } from 'react';
import { Tabs, Typography } from 'antd';

import { ProjectPanel } from '../../component';

import './StyleTrackProject.css';

const { Title } = Typography;

const { TabPane } = Tabs;


export class TrackProject extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Title level={3} className="trackproject-title bold">Track your project</Title>
        <Tabs tabBarStyle={{ 'borderBottom': 'none', marginLeft: '20px' }} defaultActiveKey="1" animated={false}>
          <TabPane tab="All" key="1">
            <ProjectPanel />
          </TabPane>
          <TabPane tab="Open" key="2" disabled>
            open
          </TabPane>
          <TabPane tab="Closed" key="3" disabled>
            close
          </TabPane>
          <TabPane tab="Draft" key="4" disabled>
            draft
          </TabPane>
          <TabPane tab="Action require" key="5" disabled>
            action
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default TrackProject;
