import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchGetProjects } from '../../actions';

import {
  LandingCarousel,
  LandingTrendingCard,
  LandingStartProject,
} from '../../component';

import './StyleMain.css';
import { Loading } from '../../helpers';

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
    if (!resultProjects) {
      return <Loading />
    }
    return (
      <div className="page-wrapper">
        <div className="landing-title">
          <span className="bold">FEATURED</span>
        </div>
        <LandingCarousel featuredProject={this.getFeaturedProject(resultProjects.Project)} />
        <LandingTrendingCard trendingProject={this.getTrendingProject(resultProjects.Project)} />
        <LandingStartProject />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const fetchGetProjects = state.fetchGetProjects.data;
  return { fetchGetProjects };
}

export default connect(mapStateToProps)(Main);
