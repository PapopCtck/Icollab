import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackTop } from 'antd';

import { ExploreCondition, ExploreResult } from '../../component';

import { fetchGetProjects, fetchSearchProjects } from '../../actions';

import AppLang from '../../AppContext';

import content from './LangExplore';

export class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultProjects: null,
    }
    props.dispatch(fetchGetProjects());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProjects !== this.props.fetchGetProjects) {
      const fetchGetProjects = this.props.fetchGetProjects.data;
      const resultProjects = fetchGetProjects.Project.sort((a, b) => this.dateSort(a.createat, b.createat))
      this.setState({ resultProjects }, () => console.log(this.state));
    }
    if (prevProps.fetchSearchProjects !== this.props.fetchSearchProjects) {
      const fetchSearchProjects = this.props.fetchSearchProjects.data;
      const resultProjects = fetchSearchProjects.Project.sort((a, b) => this.dateSort(a.createat, b.createat))
      this.setState({ resultProjects }, () => console.log(this.state));
    }
  }

  dateSort = (firstDate, secondDate) => new Date(secondDate) - new Date(firstDate);

  handleChange = (text) => {
    console.log(text);
  }

  handleSearch = (searchQuery) => {
    if (searchQuery !== '') { this.props.dispatch(fetchSearchProjects(searchQuery)).then(res => { if (res.data.Project.length == 0) { this.setState({ resultProjects: [] }) } }) }
  }

  handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery == '') {
      const fetchGetProjects = this.props.fetchGetProjects.data;
      const resultProjects = fetchGetProjects.Project.sort((a, b) => this.dateSort(a.createat, b.createat))
      this.setState({ resultProjects }, () => console.log(this.state))
    }
  }

  handleCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  handleSortSelect = (name) => {
    const { resultProjects } = this.state;
    let sortedProject = null;
    switch (name) {
      case 'Trending':
        console.log('sort by trending')
        sortedProject = resultProjects.sort((a, b) => b.view - a.view)
        this.setState({ resultProjects: sortedProject })
        break;
      case 'DateAdded':
        console.log('sort by DateAdded')
        sortedProject = resultProjects.sort((a, b) => this.dateSort(a.createat, b.createat))
        this.setState({ resultProjects: sortedProject })
        break;
      case 'Update':
        console.log('sort by Update')
        sortedProject = resultProjects.sort((a, b) => this.dateSort(a.lastupdate, b.lastupdate))
        this.setState({ resultProjects: sortedProject })
        break;
      default:
        break;
    }
  }

  render() {
    const { resultProjects } = this.state;
    const appLang = this.context;
    return (
      <div>
        <BackTop />
        <ExploreCondition
          appLang={appLang}
          content={content}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleSearchChange={this.handleSearchChange}
        />
        <ExploreResult
          appLang={appLang}
          content={content}
          resultProjects={resultProjects}
          handleChange={this.handleChange}
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
  return { fetchGetProjects, fetchSearchProjects };
}


export default connect(mapStateToProps)(Explore)
