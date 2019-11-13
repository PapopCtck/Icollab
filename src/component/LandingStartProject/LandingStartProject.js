import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './StyleLandingStartProject.css'

export class LandingStartProject extends Component {
  render() {
    return (
      <div className="start-project-container">
        <h2 className="bold">Got an idea?</h2>
        <p>Start your own project now.Its completely free!</p>
        <Button className="start-project-button bold" type="primary" size="large"><Link to="#">LEARN MORE</Link></Button> 
      </div>
    )
  }
}

export default LandingStartProject
