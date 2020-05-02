import React, { Component } from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

import ProjectDetailStory from '../ProjectDetailStory/ProjectDetailStory';

import ProjectDetailFAQ from '../ProjectDetailFAQ/ProjectDetailFAQ';

import ProjectDetailUpdates from '../ProjectDetailUpdates/ProjectDetailUpdates';

import ProjectDetailComments from '../ProjectDetailComments/ProjectDetailComments';

import ProjectDetailApplicants from '../ProjectDetailApplicants/ProjectDetailApplicants';

import { getCookie } from '../../helpers';

import './StyleProjectDetailContent.css';

const { TabPane } = Tabs;

export class ProjectDetailContent extends Component {

  render() {
    const { projectDetailAll, mockupData, theme, projectId } = this.props;
    const userInfo = getCookie('icollab_userinfo');
    return (
      <Tabs tabBarStyle={theme === 'dark' ? { 'borderBottom': 'none', 'marginLeft': '60px', color: 'white' } : { 'borderBottom': 'none', 'marginLeft': '60px' }} defaultActiveKey="1" animated={false}>
        <TabPane tab="Story" key="1">
          <ProjectDetailStory projectDetailAll={projectDetailAll} data={mockupData} theme={theme} />
        </TabPane>
        <TabPane tab="FAQ" key="2">
          <ProjectDetailFAQ projectDetailAll={projectDetailAll} data={mockupData} theme={theme} />
        </TabPane>
        <TabPane tab="Updates" key="3" disabled>
          <ProjectDetailUpdates data={mockupData} theme={theme} />
        </TabPane>
        <TabPane tab="Comments" key="4" disabled>
          <ProjectDetailComments data={mockupData} theme={theme} />
        </TabPane>
        {
          userInfo ?
            JSON.parse(userInfo)[0].user_uid === projectDetailAll.Project[0].projectstarter_id ?
              <TabPane tab="Applicants list" key="5">
                <ProjectDetailApplicants theme={theme} projectId={projectId}/>
              </TabPane>
              : null
            : null
        }
      </Tabs>
    )
  }
}

export default ProjectDetailContent

ProjectDetailContent.propTypes = {
  projectDetailAll: PropTypes.object, 
  mockupData: PropTypes.object, 
  theme: PropTypes.string, 
  projectId: PropTypes.string,
};
