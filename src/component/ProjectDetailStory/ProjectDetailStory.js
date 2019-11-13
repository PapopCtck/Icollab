import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import PropTypes from 'prop-types'

import './StyleProjectDetailStory.css';

const { Meta } = Card;

export class ProjectDetailStory extends Component {
  render() {
    const { projectDetail } = this.props;
    return (
      <div className="projectdetail-story-container">
        <div className="projectdetail-story-main">
          <h3>
            Quisque viverra interdum velit?
          </h3>
          Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit, condimentum mauris convallis cras iaculis at tempus dignissim arcu, sollicitudin posuere porta non tellus dictumst penatibus. Commodo ante quis senectus quisque semper dapibus porttitor libero lacus hendrerit volutpat, in cras a himenaeos leo ridiculus taciti ultrices cursus mattis. Tempor mi fames senectus taciti condimentum lacinia ante, non netus rhoncus eget habitant sollicitudin, cubilia luctus consequat pharetra natoque porta. Sodales tristique habitasse massa ultrices ligula semper interdum dictumst, at quis vel non facilisis congue cursus neque mollis, pretium consequat suspendisse imperdiet volutpat sollicitudin luctus.
        </div>
        <div className="projectdetail-story-sider">
          <div className="projectdetail-story-roleneeded">
            <h3 className="bold">Who are we looking for ?</h3>
            {
              projectDetail.roleNeeded.map((role) =>
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
            {projectDetail.projectStarters.map((starter) =>
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
}
