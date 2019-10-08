import React, { Component } from 'react';
import { Carousel, Icon, Button } from 'antd';
import PropTypes from 'prop-types';

import './StyleCarouselDisplay.css';

export class CarouselDisplay extends Component {
  constructor(props){
    super(props)
    this.state={
      activeChoice: 0,
    }
  }
  next = () => {
    this.carousel.next();
  }
  
  previous = () => {
    this.carousel.prev();
  }

  changeSlide = (from,to) => {
    this.setState({
      activeChoice: to,
    })
    this.props.getCarouselPosition(to);
  }
  
  goToSlide = (e) => {
    this.carousel.goTo(e.target.id)
  }

  renderSliderChoice = () => {
    const slideCount = this.props.children.length;
    const { activeChoice } = this.state;
    let elementArr = [];
    for (let index = 0; index < slideCount; index++) {
      elementArr.push(<Button id={index} key={index} type="link" onClick={(e) => this.goToSlide(e)} className={activeChoice === index ? 'active-choice' : 'choice'}>{index+1}</Button>)
    }
    return elementArr
  }
  render() {
    return (
      <div className="carousel-container">
        <div className="carousel-display-container">
          <Icon className="left-circle" type="left-circle" onClick={this.previous} />
          <Carousel className="carousel-display" ref={ref => this.carousel = ref} autoplay={false} beforeChange={(from,to) => this.changeSlide(from,to)} pauseOnHover dots={false} adaptiveHeight>
            {this.props.children}
          </Carousel>
          <Icon className="right-circle" type="right-circle" onClick={this.next} />
        </div>
        <div className="carousel-choice-container">
          {
            this.renderSliderChoice()
          }
          {/* <span>1</span>
          <span>2</span>
          <span>3</span> */}

        </div>
      </div>
    )
  }
}

export default CarouselDisplay;

CarouselDisplay.propTypes = {
  children: PropTypes.any,
  getCarouselPosition: PropTypes.func,
}
