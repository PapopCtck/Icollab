import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BackTop } from 'antd';
import PropTypes from 'prop-types';


import { fetchGetProjects } from '../../actions';

import {
  LandingCarousel,
  LandingTrendingCard,
  LandingStartProject,
} from '../../component';

import { Loading, RefreshToken } from '../../helpers';

import AppLang from '../../AppContext';
import content from './LangMain';

import './StyleMain.css';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultProjects: null,
    }
    props.dispatch(fetchGetProjects());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProjects !== this.props.fetchGetProjects) {
      const fetchGetProjects = this.props.fetchGetProjects;
      this.setState({ resultProjects: fetchGetProjects });
    }
  }

  getTrendingProject = (resultProjects) => resultProjects.filter((project) => project.highlight === true)

  getFeaturedProject = (resultProjects) => resultProjects.filter((project) => project.superhighlight === true)

  render() {
    const { resultProjects } = this.state;
    const { appLang, appTheme } = this.context;
    if (!resultProjects) {
      return <div className={'main-loading ' + appTheme}><Loading /></div>
    }
    return (
      <div className="main-container page-wrapper">
        <RefreshToken />
        <BackTop />
        <div className="landing-title">
          <span className="bold">{content[appLang].featured}</span>
        </div>
        <LandingCarousel featuredProject={this.getFeaturedProject(resultProjects.Project)} appTheme={appTheme} roleNeeded={resultProjects.RoleNeeded} />
        <LandingTrendingCard trendingProject={this.getTrendingProject(resultProjects.Project)} roleNeeded={resultProjects.RoleNeeded} lang={appLang} appTheme={appTheme} />
        <LandingStartProject lang={appLang} appTheme={appTheme}/>
      </div>
    )
  }
}

Main.contextType = AppLang;

const mapStateToProps = state => {
  const fetchGetProjects = state.fetchGetProjects.data;
  return { fetchGetProjects };
}

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  dispatch: PropTypes.func,
  fetchGetProjects: PropTypes.object,
}
