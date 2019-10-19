import React, { Component } from 'react';
import { Tabs } from 'antd';

import './StyleProjectDetailContent.css';

const { TabPane } = Tabs;

export class ProjectDetailContent extends Component {
  render() {
    return (
      <Tabs tabBarStyle={{ 'borderBottom': 'none' }} defaultActiveKey="1" animated={false}>
        <TabPane tab="Story" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="FAQ" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Updates" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Comments" key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    )
  }
}

export default ProjectDetailContent
