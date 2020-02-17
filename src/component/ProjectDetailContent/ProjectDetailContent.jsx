import React, { Component } from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types'

import ProjectDetailStory from '../ProjectDetailStory/ProjectDetailStory';

import ProjectDetailFAQ from '../ProjectDetailFAQ/ProjectDetailFAQ';

import ProjectDetailUpdates from '../ProjectDetailUpdates/ProjectDetailUpdates';

import ProjectDetailComments from '../ProjectDetailComments/ProjectDetailComments';

import './StyleProjectDetailContent.css';

const { TabPane } = Tabs;

export class ProjectDetailContent extends Component {
  render() {
    const { projectDetail, mockupData, theme } = this.props;
    return (
      <Tabs tabBarStyle={theme === 'dark' ? { 'borderBottom': 'none', 'marginLeft': '60px', color: 'white' } : { 'borderBottom': 'none', 'marginLeft': '60px' }} defaultActiveKey="1" animated={false}>
        <TabPane tab="Story" key="1">
          <ProjectDetailStory projectDetail={projectDetail} data={mockupData} theme={theme} />
        </TabPane>
        <TabPane tab="FAQ" key="2">
          <ProjectDetailFAQ data={mockupData} theme={theme}/>
        </TabPane>
        <TabPane tab="Updates" key="3">
          <ProjectDetailUpdates data={mockupData} theme={theme}/>
        </TabPane>
        <TabPane tab="Comments" key="4">
          <ProjectDetailComments data={mockupData} theme={theme}/>
        </TabPane>
      </Tabs>
    )
  }
}

export default ProjectDetailContent

ProjectDetailContent.propTypes = {
  projectDetail: PropTypes.object,
};
