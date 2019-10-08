import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import PropTypes from 'prop-types';


import { CarouselDisplay } from '../../helpers';

import './StyleLandingCarousel.css';

export class LandingCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChoice: 0,
    }
  }
  getCarouselPosition = (activeChoice) => {
    console.log('choice', activeChoice)
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
        <CarouselDisplay getCarouselPosition={this.getCarouselPosition} {...this.props}>
          {this.props.children}
        </CarouselDisplay>
        <div className="carousel-content-container">
          <div className="carousel-content-title">
            {featuredProject[activeChoice].projectTitle}
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
            <br />
            <Link to="#">Learn more...</Link>
          </div>
          <div className="carousel-content-starter-container">
            <Avatar className="carousel-content-starter-avatar" icon={featuredProject[activeChoice].projectStarter.userImg ? '' : 'user'} >{featuredProject[activeChoice].projectStarter.userImg}</Avatar>
            <div className="carousel-content-starter-name">
              {featuredProject[activeChoice].projectStarter.fullName}
            </div>
            <div className="crousel-content-starter-assoc">
              {
                featuredProject[activeChoice].projectStarter.userAssociation.map(assoc => assoc)
              }
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
