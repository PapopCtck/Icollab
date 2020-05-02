import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackTop } from 'antd';
import PropTypes from 'prop-types';

import { ExploreCondition, ExploreResult } from '../../component';

import { fetchGetProjects, fetchSearchProjects, fetchGetProjectCategory } from '../../actions';

import { Loading, RefreshToken } from '../../helpers';

import AppLang from '../../AppContext';

import content from './LangExplore';

export class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultProjects: null,
      roleNeeded: null,
      checkedFilter: [],
      projectCategory: null,
      location: null,
      jobfields: [],
      jobTitles: [],
      jobtitle: null,
    }
    props.dispatch(fetchGetProjects());
    props.dispatch(fetchGetProjectCategory());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProjects !== this.props.fetchGetProjects) {
      const fetchGetProjects = this.props.fetchGetProjects.data;
      const resultProjects = fetchGetProjects.Project.sort((a, b) => this.dateSort(a.created, b.created))
      const roleNeeded = fetchGetProjects.RoleNeeded;
      const jobTitles = this.handleJobList(roleNeeded);
      this.setState({ resultProjects, roleNeeded, jobTitles });
    }
    if (prevProps.fetchSearchProjects !== this.props.fetchSearchProjects) {
      const fetchSearchProjects = this.props.fetchSearchProjects.data;
      const resultProjects = fetchSearchProjects.Project.sort((a, b) => this.dateSort(a.created, b.created))
      this.setState({ resultProjects });
    }
    if (prevProps.fetchGetProjectCategory !== this.props.fetchGetProjectCategory) {
      const fetchGetProjectCategory = this.props.fetchGetProjectCategory;
      this.setState({ projectCategory: fetchGetProjectCategory });
    }
  }

  dateSort = (firstDate, secondDate) => secondDate - firstDate;

  handleChange = (value, name) => {
    this.setState({ [name]: value }, () => this.handleFilter())
  }

  handleSearch = (searchQuery) => {
    if (searchQuery !== '') { this.props.dispatch(fetchSearchProjects(searchQuery)).then(res => { if (res.data.Project.length === 0) { this.setState({ resultProjects: [] }) } }) }
  }

  handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery === '') {
      const { checkedFilter } = this.state;
      const fetchGetProjects = this.props.fetchGetProjects.data;
      let resultProjects = fetchGetProjects.Project.sort((a, b) => this.dateSort(a.created, b.created))
      if (checkedFilter.length !== 0) {
        resultProjects = resultProjects.filter((project) => checkedFilter.includes(project.projectlevel));
      }
      this.setState({ resultProjects })
    }
  }

  handleCheck = (e) => {
    let { resultProjects, checkedFilter } = this.state;
    if (e.target.checked === true) {
      checkedFilter.push(e.target.id);
    } else {
      checkedFilter = checkedFilter.filter(id => id !== e.target.id);
    }
    let sortedProject = null;
    if (checkedFilter.length === 0) {
      const fetchGetProjects = this.props.fetchGetProjects.data;
      sortedProject = fetchGetProjects.Project;
      this.setState({ resultProjects: sortedProject, checkedFilter }, () => this.handleFilter())
    } else {
      sortedProject = resultProjects.filter((project) => checkedFilter.includes(project.projectlevel));
      this.setState({ resultProjects: sortedProject, checkedFilter })
    }
  }

  handleSortSelect = (name) => {
    const { resultProjects } = this.state;
    let sortedProject = null;
    switch (name) {
      case 'Trending':
        sortedProject = resultProjects.sort((a, b) => b.view - a.view)
        this.setState({ resultProjects: sortedProject })
        break;
      case 'DateAdded':
        sortedProject = resultProjects.sort((a, b) => this.dateSort(a.created, b.created))
        this.setState({ resultProjects: sortedProject })
        break;
      case 'Update':
        sortedProject = resultProjects.sort((a, b) => this.dateSort(a.lastupdate, b.lastupdate))
        this.setState({ resultProjects: sortedProject })
        break;
      default:
        break;
    }
  }

  handleFilter = () => {
    const { location, jobfields, jobtitle, checkedFilter, roleNeeded } = this.state;
    let newResultProject = this.props.fetchGetProjects.data.Project;
    if (location) {
      newResultProject = newResultProject.filter((project) => project.location === location);
    }
    if (jobfields.length !== 0) {
      newResultProject = newResultProject.filter((project) => jobfields.includes(project.jobfields));
    }
    if (jobtitle) {
      let filteredRole = roleNeeded.filter(role => role.jobtitle === jobtitle);
      filteredRole = filteredRole.map(role => role.project_uid)
      newResultProject = newResultProject.filter((project) => filteredRole.includes(project.project_uid));
    }
    if (checkedFilter.length !== 0) {
      newResultProject = newResultProject.filter((project) => checkedFilter.includes(project.projectlevel));
    }
    this.setState({ resultProjects: newResultProject });
  }

  handleJobList = (roleNeeded) => {
    if (!roleNeeded || roleNeeded.length === 0) {
      return;
    }
    return [...new Set(roleNeeded.map(job => job.jobtitle))];
  }

  render() {
    const { resultProjects, roleNeeded, projectCategory, jobTitles } = this.state;
    const { appLang, appTheme } = this.context;
    if (!projectCategory) {
      return <div className={'main-loading ' + appTheme}><Loading /></div>
    }
    return (
      <div>
        <RefreshToken />
        <BackTop />
        <ExploreCondition
          appLang={appLang}
          appTheme={appTheme}
          content={content}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleSearchChange={this.handleSearchChange}
          projectCategory={projectCategory}
          jobTitles={jobTitles}
        />
        <ExploreResult
          appLang={appLang}
          appTheme={appTheme}
          content={content}
          resultProjects={resultProjects}
          roleNeeded={roleNeeded}
          handleCheck={this.handleCheck}
          handleSortSelect={this.handleSortSelect}
        />
      </div>
    )
  }
}

Explore.contextType = AppLang;

const mapStateToProps = state => {
  const fetchGetProjects = state.fetchGetProjects;
  const fetchSearchProjects = state.fetchSearchProjects;
  const fetchGetProjectCategory = state.fetchGetProjectCategory.data;
  return { fetchGetProjects, fetchSearchProjects, fetchGetProjectCategory };
}


export default connect(mapStateToProps)(Explore);

Explore.propTypes = {
  fetchGetProjects: PropTypes.object,
  fetchSearchProjects: PropTypes.object,
  fetchGetProjectCategory: PropTypes.object,
  dispatch: PropTypes.func,
}
