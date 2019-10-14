import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from 'antd';

import PropTypes from 'prop-types';


import { CarouselDisplay } from '../../helpers';

import './StyleLandingCarousel.css';

const { Title } = Typography;

export class LandingCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChoice: 0,
    }
  }
  getCarouselPosition = (activeChoice) => {
    this.setState({
      activeChoice,
    })
  }
  render() {
    const { featuredProject } = this.props;
    const { activeChoice } = this.state;

    if (!featuredProject) {
      //todo add loading and error
      return alert('error');
    }

    return (
      <div className="landing-carousel-container">
        <CarouselDisplay getCarouselPosition={this.getCarouselPosition} {...this.props} />
        <div className="carousel-content-container">
          <div className="carousel-content-title">
            <Title level={2}>
              {featuredProject[activeChoice].projectTitle}
            </Title>
          </div>
          <div className="carousel-content-sub-title">
            <span className="carousel-content-static">
              level :
            </span>
            <span className="carousel-content-level">
              {featuredProject[activeChoice].projectLevel.map(level => level)}
            </span>
            <span className="carousel-content-static">
              role needed :
            </span>
            <span className="carousel-content-role">
              {featuredProject[activeChoice].roleNeeded.map(role => role)}
            </span>
          </div>
          <div className="carousel-content-description">
            &quot;
            {featuredProject[activeChoice].projectDescription}
            &quot;
            <div className="carousel-content-learnmore">
              <Link to={'/project/'+featuredProject[activeChoice].projectId}>Learn more...</Link>
            </div>
          </div>
          <div className="carousel-content-starter-container">
            <Avatar size={50} className="carousel-content-starter-avatar" icon={featuredProject[activeChoice].projectStarter.userImg ? '' : 'user'} src={featuredProject[activeChoice].projectStarter.userImg} >{featuredProject[activeChoice].projectStarter.userImg}</Avatar>
            <div className="carousel-content-starter-detail">
              <div className="carousel-content-starter-name">
                {featuredProject[activeChoice].projectStarter.fullName}
              </div>
              <div className="crousel-content-starter-assoc">
                {
                  featuredProject[activeChoice].projectStarter.userAssociation.map(assoc => assoc)
                }
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

export default LandingCarousel;

LandingCarousel.propTypes = {
  children: PropTypes.any,
  featuredProject: PropTypes.array,
}
