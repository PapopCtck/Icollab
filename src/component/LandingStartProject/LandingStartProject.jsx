import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import PropTypes from 'prop-types';

import content from './LangLandingStartProject';

import './StyleLandingStartProject.css'

export class LandingStartProject extends Component {
  render() {
    const { lang, appTheme } = this.props;
    return (
      <div className="start-project-container">
        <h2 className={'bold '+ appTheme + '-text'}>{content[lang].ideaQuote}</h2>
        <p>{content[lang].startQuote}</p>
        <Button className="start-project-button" type="primary" size="large"><Link to="/learnmore">{content[lang].learnMore}</Link></Button>
      </div>
    )
  }
}

export default LandingStartProject;

LandingStartProject.propTypes = {
  lang: PropTypes.string,
  appTheme: PropTypes.string,
}
