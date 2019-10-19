import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Icon } from 'antd';

import './StyleProjectDetailHeader.css';

const { Title } = Typography;

export class DetailHeader extends Component {
  render() {
    const { projectDetail, projectId } = this.props;
    return (
      <div className="detailheader-carousel-container">
        <div className="detailheader-image-container">
          <img className="detailheader-image" src={projectDetail.projectThumbnail} alt={projectDetail.projectTitle} />
        </div>
        <div className="carousel-content-container detailheader-carousel-content-container">
          <div className="carousel-content-title">
            <Title level={2}>
              {projectDetail.projectTitle + ' ' + projectId}
            </Title>
          </div>
          <div className="carousel-content-sub-title detailheader-carousel-content-sub-title">
            <div className="carousel-content-level detailheader-carousel-content">
              <span className="bold">level : </span>
              {projectDetail.projectLevel.map((level, idx) => idx === 0 ? level : ', ' + level)}
            </div>
            <div className="carousel-content-role detailheader-carousel-content">
              <span className="bold">role needed : </span>
              {projectDetail.roleNeeded.map((role, idx) => idx === 0 ? role : ', ' + role)}
            </div>
            <div className="carousel-content-industry detailheader-carousel-content">
              <span className="bold">Industry : </span>
              {projectDetail.projectIndustry.map((ind, idx) => idx === 0 ? ind : ', ' + ind)}
            </div>
            <div className="carousel-content-location detailheader-carousel-content">
              <span className="bold">location : </span>
              {projectDetail.projectLocation}
            </div>
            <Button className="detailheader-carousel-applybtn" type="primary" block>
              Apply now
            </Button>
            <div className="detailheader-carousel-contact-container">
              <Button className="detailheader-carousel-chatbtn" icon="mail" type="primary" ghost>talk with us!</Button>
              <Icon type="facebook" className="primary-icon social-icon" />
              <Icon type="instagram" className="primary-icon social-icon" />
              <Icon type="twitter" className="primary-icon social-icon" />
              <Icon type="reddit" className="primary-icon social-icon" />
            </div>
            <div className="detailheader-carousel-report-container">
              think this project should be at another level ? <Link to="#">tell us</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailHeader
