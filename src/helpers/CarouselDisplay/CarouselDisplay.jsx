import React, { Component } from 'react';
import { Carousel, Icon, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './StyleCarouselDisplay.css';

export class CarouselDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChoice: 0,
    }
  }


  onSlideClick = (target) => {
    this.props.history.push('/project/' + target)
  }

  changeSlide = (from, to) => {
    this.setState({
      activeChoice: to,
    })
    this.props.getCarouselPosition(to);
  }

  goToSlide = (e) => {
    this.carousel.goTo(e.target.id)
  }

  renderSliderChoice = () => {
    const slideCount = this.props.featuredProject.length;
    const { activeChoice } = this.state;
    let elementArr = [];
    for (let index = 0; index < slideCount; index++) {
      elementArr.push(<Button id={index} key={index} type="link" onClick={(e) => this.goToSlide(e)} className={activeChoice === index ? 'active-choice' : 'choice'}>{index + 1}</Button>)
    }
    return elementArr
  }

  next = () => {
    this.carousel.next();
  }

  previous = () => {
    this.carousel.prev();
  }

  render() {
    return (
      <div className="carousel-container">
        <div className="carousel-display-container">
          <Icon className="left-circle" type="left-circle" onClick={this.previous} />
          <Carousel className={'carousel-display ' + this.props.appTheme} ref={ref => this.carousel = ref} autoplay beforeChange={(from, to) => this.changeSlide(from, to)} pauseOnHover dots={false}>
            {this.props.featuredProject.map((data) =>
              <img className="carousel-image" key={data.project_uid} alt={data.projecttitle} src={data.image ? data.image : '/assets/doge.jpg'} onClick={() => this.onSlideClick(data.project_uid)}></img>
            )}
          </Carousel>
          <Icon className="right-circle" type="right-circle" onClick={this.next} />
        </div>
        <div className="carousel-choice-container">
          {
            this.renderSliderChoice()
          }
        </div>
      </div >
    )
  }
}

export default withRouter(CarouselDisplay);
//export default withRouter(connect(mapStateToProps)(CarouselDisplay)) when using redux

CarouselDisplay.propTypes = {
  children: PropTypes.any,
  getCarouselPosition: PropTypes.func,
  featuredProject: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}
