import React, { Component } from 'react';
import { Descriptions } from 'antd';
import PropTypes from 'prop-types'


import { CarouselDisplay } from '../../helpers';

import './StyleLandingCarousel.css';

export class LandingCarousel extends Component {
  render() {
    return (
      <div className="landing-carousel-container">
        <CarouselDisplay {...this.props}>
          {this.props.children}
        </CarouselDisplay>
        <div className="carousel-content-container">
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>,
        </div>
      </div>
    )
  }
}

export default LandingCarousel;

LandingCarousel.propTypes = {
  children: PropTypes.any,
}
