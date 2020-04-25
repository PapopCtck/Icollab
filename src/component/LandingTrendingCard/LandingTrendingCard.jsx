import React, { Component } from 'react';
import { Card, Carousel, Icon, Empty } from 'antd';
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
    const { trendingProject, lang, appTheme, roleNeeded } = this.props;
    const cardTheme = {
      dark: {
        backgroundColor: '#29292e',
        color: '#fff',
      },
      light: {
        backgroundColor: '#fff',
        color: 'rgba(0,0,0,0.85)',
      },
    }
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
          {
            trendingProject.length !== 0 ?
              <Carousel ref={ref => this.carousel = ref} dots={false} slidesToShow={3} slidesToScroll={3} responsive={responsive} infinite={false}>
                {trendingProject.map((project) => {
                  const roleObj = roleNeeded.find(obj => obj.project_uid === project.project_uid)
                  return (<Card
                    onClick={() => this.onCardClick(project.project_uid)}
                    bordered={appTheme === 'light'}
                    bodyStyle={cardTheme[appTheme]}
                    cover={
                      <img
                        style={{ maxHeight: '240px', minHeight: '240px' }}
                        alt="example"
                        src={project.image ? project.image : '/assets/doge.jpg'}
                      />
                    }
                  >
                    <Meta
                      title={<div className={'explore-title ' + appTheme + '-text'}>{project.projecttitle}</div>}
                      description={
                        <div className={'explore-card-container ' + appTheme + '-subtext'}>
                          <div className="explore-card-description-text">
                            {project.projectdescription}
                          </div>
                          <div className="explore-card-role">
                            role needed : {roleObj.jobtitle}
                          </div>
                          <div className="explore-card-bottom">
                            <span className="explore-card-bottom-left">
                              <Icon type="clock-circle" />
                              <span className="explore-card-time-text">{timeSince(project.created)}</span>
                            </span>
                            <span className="explore-card-bottom-right">by {project.projectstarter_name ? project.projectstarter_name : '-'}</span>
                          </div>
                        </div>
                      }
                    />
                  </Card>)
                })}
              </Carousel>
              : <Empty image="/assets/doge.jpg" imageStyle={{ opacity: 0.4, marginTop: '20px', borderRadius: '15px', width: 'inherit', minWidth: '320px', height: '340px' }} description={<span>Much space, Such empty, WOW!</span>} />
          }
        </div>
      </div >
    )
  }
}

export default withRouter(LandingTrendingCard);

LandingTrendingCard.propTypes = {
  trendingProject: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  lang: PropTypes.string,
}
