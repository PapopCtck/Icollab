import React, { Component } from 'react';
import { Card, Carousel, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

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
    const { trendingProject } = this.props;
    return (
      <div className="landing-trending-container">
        <div className="landing-trending-header">
          <span className="bold">TRENDING</span>
          <div className="landing-trending-header-right">
            <Icon className="landing-trending-icon" type="left" onClick={this.previous} />
            <Icon className="landing-trending-icon" type="right" onClick={this.next} />
          </div>
        </div>
        <div className="carouselcard-container">
          <Carousel ref={ref => this.carousel = ref} dots={false} slidesToShow={3} slidesToScroll={3} responsive={responsive}>
            {trendingProject.map((data) =>
              <Card
                cover={<img className="carouselcard-img" alt="example" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" />}
                key={data.projectId}
                onClick={() => this.onCardClick(data.projectId)}
              >
                <Meta title={data.projectTitle} description={data.projectDescription} />
              </Card>)}
          </Carousel>
        </div>
      </div >
    )
  }
}

export default withRouter(LandingTrendingCard);
