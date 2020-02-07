import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import PropTypes from 'prop-types'

import './StyleProjectDetailStory.css';

const { Meta } = Card;

export class ProjectDetailStory extends Component {
  render() {
    const { projectDetail, data } = this.props;
    return (
      <div className="projectdetail-story-container">
        <div className="projectdetail-main">
          <h3>
            Quisque viverra interdum velit?
          </h3>
          {projectDetail.projectdescription}
        </div>
        <div className="projectdetail-sider">
          <div className="projectdetail-story-roleneeded">
            <h3 className="bold">Who are we looking for ?</h3>
            {
              data.roleNeeded.map((role) =>
                <Card className="projectdetail-story-rolecard-container">
                  <Meta className="bold" title={role.title} />
                  <div className="projectdetail-story-rolecard-skill">
                    Skills : {role.jobSkill.map((skill) => skill)}
                  </div>
                  <div className="projectdetail-story-rolecard-description">
                    Description : {role.jobDescription}
                  </div>
                  <div className="projectdetail-story-rolecard-amount bold">
                    {role.gotAmount + ' of ' + role.neededAmount}
                  </div>
                </Card>
              )
            }
          </div>
          <div className="projectdetail-story-staters">
            <h3 className="bold">About us</h3>
            {data.projectStarters.map((starter) =>
              <Card className="projectdetail-story-statercard-container">
                <div className="projectdetail-story-statercard">
                  <Avatar size="large" className="projectdetail-story-statercard-avatar" src={starter.userImg} />
                  <div className="projectdetail-story-statercard-detail">
                    <h3 className="bold">{starter.fullName}</h3>
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
