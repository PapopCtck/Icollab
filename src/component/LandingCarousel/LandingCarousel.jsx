import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Empty } from 'antd';

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
    const { featuredProject, appTheme, roleNeeded } = this.props;
    const { activeChoice } = this.state;

    if (!featuredProject) {
      //todo add loading and error
      return alert('error');
    }
    const roleArr = roleNeeded.filter(obj => obj.project_uid === featuredProject[activeChoice].project_uid)
    return (
      featuredProject.length !== 0 ?
        <div className="landing-carousel-container">
          <CarouselDisplay getCarouselPosition={this.getCarouselPosition} {...this.props} />
          <div className="carousel-content-container">
            <div className="carousel-content-title">
              <Title level={2} className={appTheme + '-text'}>
                {featuredProject[activeChoice].projecttitle}
              </Title>
            </div>
            <div className="carousel-content-sub-title">
              <span className="carousel-content-static">
                level :
              </span>
              <span className="carousel-content-level">
                {featuredProject[activeChoice].projectlevel}
              </span>
              <span className="carousel-content-static">
                role needed :
              </span>
              <span className="carousel-content-role">
                {roleArr ? roleArr.map((roleObj, idx) => idx === 0 ? roleObj.jobtitle : ' , ' + roleObj.jobtitle) : null}
              </span>
            </div>
            <div className="carousel-content-description">
              &quot;
              {featuredProject[activeChoice].projectdescription}
            &quot;
            </div>
            <div className="carousel-content-learnmore">
              <Link to={'/project/' + featuredProject[activeChoice].project_uid}>Learn more...</Link>
            </div>
            <div className="carousel-content-starter-container">
              <div className="carousel-content-starter-detail">
                <div className="carousel-content-starter-name">
                  {'by ' + featuredProject[activeChoice].projectstarter_name}
                </div>
              </div>
            </div>
          </div>
        </div>
        : <Empty image="/assets/doge.jpg" imageStyle={{ opacity: 0.4, marginTop: '20px', borderRadius: '15px', width: 'inherit', minWidth: '320px', height: '340px' }} description={<span>Much space, Such empty, WOW!</span>} />
    )
  }
}

export default LandingCarousel;

LandingCarousel.propTypes = {
  children: PropTypes.any,
  featuredProject: PropTypes.array,
}
