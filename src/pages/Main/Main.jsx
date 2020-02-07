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

import { Loading } from '../../helpers';

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
      this.setState({ resultProjects: fetchGetProjects }, () => console.log(this.state));
    }
  }

  // getFeaturedProject = (resultProjects) => resultProjects.slice(0, 6)

  // getTrendingProject = (resultProjects) => resultProjects.slice(6, 12)

  getTrendingProject = (resultProjects) => resultProjects.filter((project) => project.highlight === true)

  getFeaturedProject = (resultProjects) => resultProjects.filter((project) => project.superhighlight === true)

  render() {
    const { resultProjects } = this.state;
    const lang = this.context;
    if (!resultProjects) {
      return <Loading />
    }
    return (
      <div className="page-wrapper">
        <BackTop />
        <div className="landing-title">
          <span className="bold">{content[lang].featured}</span>
        </div>
        <LandingCarousel featuredProject={this.getFeaturedProject(resultProjects.Project)} />
        <LandingTrendingCard trendingProject={this.getTrendingProject(resultProjects.Project)} lang={lang} />
        <LandingStartProject lang={lang} />
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
