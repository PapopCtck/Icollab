import React, { Component } from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types'

import { ProjectDetailStory } from '../ProjectDetailStory/ProjectDetailStory';

import './StyleProjectDetailContent.css';

const { TabPane } = Tabs;

export class ProjectDetailContent extends Component {
  render() {
    const { projectDetail } = this.props;
    return (
      <Tabs tabBarStyle={{ 'borderBottom': 'none', 'marginLeft': '60px' }} defaultActiveKey="1" animated={false}>
        <TabPane tab="Story" key="1">
          <ProjectDetailStory projectDetail={projectDetail} />
        </TabPane>
        <TabPane tab="FAQ" key="2" disabled>
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Updates" key="3" disabled>
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Comments" key="4" disabled>
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    )
  }
}

export default ProjectDetailContent

ProjectDetailContent.propTypes = {
  projectDetail: PropTypes.object,
};
