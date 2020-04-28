import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import './StyleProjectDetailStory.css';

const { Meta } = Card;

export class ProjectDetailStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { projectDetailAll, theme } = this.props;
    const projectDetail = projectDetailAll.Project[0];
    return (
      <div className={'projectdetail-story-container ' + theme + '-text'}>
        <div className="projectdetail-main">
          {ReactHtmlParser(projectDetail.projectstory)}
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
            <h3 className={'bold ' + theme + '-text'}>About us</h3>
            <Card className={'projectdetail-story-statercard-container ' + theme}>
              <div className="projectdetail-story-statercard">
                <Avatar size="large" className="projectdetail-story-statercard-avatar" src={projectDetailAll.Userdetail[0].image ? projectDetailAll.Userdetail[0].image : '/assets/doge.jpg'} />
                <div className="projectdetail-story-statercard-detail">
                  <h3 className={'bold ' + theme + '-text'}>{projectDetailAll.Project[0].projectstarter_name}</h3>
                  <span className={'bold ' + theme + '-text'}>Project starter</span>
                </div>
              </div>
            </Card>
            {projectDetailAll.Contributors.map((starter) =>
              <Card className={'projectdetail-story-statercard-container ' + theme}>
                <div className="projectdetail-story-statercard">
                  <Avatar size="large" className="projectdetail-story-statercard-avatar" src={starter.image ? starter.image : '/assets/doge.jpg'} />
                  <div className="projectdetail-story-statercard-detail">
                    <h3 className={'bold ' + theme + '-text'}>{starter.name}</h3>
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
