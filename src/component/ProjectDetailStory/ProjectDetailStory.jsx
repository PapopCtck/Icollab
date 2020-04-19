import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import PropTypes from 'prop-types'

import './StyleProjectDetailStory.css';

const { Meta } = Card;

export class ProjectDetailStory extends Component {
  render() {
    const { projectDetailAll, data, theme } = this.props;
    const projectDetail = projectDetailAll.Project[0];
    return (
      <div className={'projectdetail-story-container ' + theme + '-text'}>
        <div className="projectdetail-main">
          {projectDetail.projectdescription}
        </div>
        <div className="projectdetail-sider">
          <div className="projectdetail-story-roleneeded">
            <h3 className={'bold ' + theme + '-text'}>Who are we looking for ?</h3>
            {
              projectDetailAll.RoleNeeded.map((role) =>
                <Card className={'projectdetail-story-rolecard-container ' + theme}>
                  <Meta title={<div className={'bold ' + theme + '-text'}>{role.jobtitle}</div>} />
                  <div className="projectdetail-story-rolecard-skill">
                    Skills : {role.jobskills}
                    {/* {role.jobSkill.map((skill) => skill)} */}
                  </div>
                  <div className="projectdetail-story-rolecard-description">
                    Description : {role.jobdescription}
                  </div>
                  <div className="projectdetail-story-rolecard-amount bold">
                    {0 + ' of ' + role.jobamount}
                  </div>
                </Card>
              )
            }
          </div>
          <div className="projectdetail-story-staters">
            <h3 className={'bold ' + theme + '-text' }>About us</h3>
            {data.projectStarters.map((starter) =>
              <Card className={'projectdetail-story-statercard-container ' + theme}>
                <div className="projectdetail-story-statercard">
                  <Avatar size="large" className="projectdetail-story-statercard-avatar" src={starter.userImg} />
                  <div className="projectdetail-story-statercard-detail">
                    <h3 className={'bold ' + theme + '-text'}>{starter.fullName}</h3>
                    {starter.userAssociation.map((assoc) => assoc)}
                    {starter.projectRole}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetailStory;

ProjectDetailStory.propTypes = {
  projectDetail: PropTypes.object,
  data: PropTypes.object,
}
