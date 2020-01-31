import React, { Component } from 'react';
import { Card, Carousel, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { timeSince } from '../../helpers';

import content from './LangLandingTrendingCard';

import './StyleLandingTrendingCard.css';

const { Meta } = Card;

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]

export class LandingTrendingCard extends Component {
  onCardClick = (target) => {
    this.props.history.push('/project/' + target)
  }

  next = () => {
    this.carousel.next();
  }

  previous = () => {
    this.carousel.prev();
  }

  render() {
    const { trendingProject, lang } = this.props;
    return (
      <div className="landing-trending-container">
        <div className="landing-trending-header">
          <span className="bold">{content[lang].trending}</span>
          <div className="landing-trending-header-right">
            <Icon className="landing-trending-icon" type="left" onClick={this.previous} />
            <Icon className="landing-trending-icon" type="right" onClick={this.next} />
          </div>
        </div>
        <div className="carouselcard-container">
          <Carousel ref={ref => this.carousel = ref} dots={false} slidesToShow={3} slidesToScroll={3} responsive={responsive}>
            {trendingProject.map((project) =>
              <Card
                onClick={() => this.onCardClick(project.project_uid)}
                cover={
                  <img
                    style={{ maxHeight: '240px', minHeight: '240px' }}
                    alt="example"
                    src={project.image ? project.image : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
                  />
                }
              >
                <Meta
                  title={project.projecttitle}
                  description={
                    <div className="explore-card-container">
                      <div className="explore-card-description-text">
                        {project.projectdescription}
                      </div>
                      <div className="explore-card-role">
                        {/* role needed : {project.roleneeded.map((role, idx) => idx === 0 ? role.title : ', ' + role.title)} */}
                        role needed : {project.roleneeded}
                      </div>
                      <div className="explore-card-bottom">
                        <span className="explore-card-bottom-left">
                          <Icon type="clock-circle" />
                          <span className="explore-card-time-text">{timeSince(project.createat)}</span>
                        </span>
                        {/* <span className="explore-card-bottom-right">by {project.projectStarters[0].fullName}</span> */}
                        <span className="explore-card-bottom-right">by {project.projectstarter ? project.projectstarter : 'John doe'}</span>
                      </div>
                    </div>
                  }
                />
              </Card>)}
          </Carousel>
        </div>
      </div >
    )
  }
}

export default withRouter(LandingTrendingCard);

LandingTrendingCard.propTypes = {
  trendingProject: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}
