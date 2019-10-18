import React, { Component } from 'react';
import { Typography, Avatar } from 'antd';

import './StyleProjectDetailHeader.css';

const { Title } = Typography;

export class DetailHeader extends Component {
  render() {
    const { projectDetail } = this.props;
    return (
      <div className="detailheader-carousel-container">
        <div className="detailheader-image-container">
          <img className="detailheader-image" src={projectDetail.projectThumbnail} alt={projectDetail.projectTitle} />
        </div>
        <div className="carousel-content-container detailcarousel-content-container">
          <div className="carousel-content-title">
            <Title level={2}>
              Header
            </Title>
          </div>
          <div className="carousel-content-sub-title">
            <span className="carousel-content-static">
              level :
            </span>
            <span className="carousel-content-level">
              123
            </span>
            <span className="carousel-content-static">
              role needed :
            </span>
            <span className="carousel-content-role">
              idk
            </span>
          </div>
          <div className="carousel-content-description">
            &quot;
          desc
            &quot;
          </div>
          <div className="carousel-content-starter-container">
            <Avatar size={50} className="carousel-content-starter-avatar" icon="user"></Avatar>
            <div className="carousel-content-starter-detail">
              <div className="carousel-content-starter-name">
                full name
              </div>
              <div className="crousel-content-starter-assoc">
                asssoc
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailHeader
