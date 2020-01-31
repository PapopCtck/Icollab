import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackTop } from 'antd';

import { ExploreCondition, ExploreResult } from '../../component';

import { fetchGetProjects } from '../../actions';

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
      const fetchGetProjects = this.props.fetchGetProjects;
      const resultProjects = fetchGetProjects.Project.sort((a, b) => this.dateSort(a.createat, b.createat))
      this.setState({ resultProjects: resultProjects }, () => console.log(this.state));
    }
  }

  dateSort = (firstDate, secondDate) => new Date(secondDate) - new Date(firstDate);

  handleChange = (text) => {
    console.log(text);
  }

  handleSearch = (text) => {
    console.log(text);
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
        this.setState({ resultProjects : sortedProject })
        break;
      case 'DateAdded':
        console.log('sort by DateAdded')
        sortedProject = resultProjects.sort((a, b) => this.dateSort(a.createat, b.createat))
        this.setState({ resultProjects : sortedProject })
        break;
      case 'Update':
        console.log('sort by Update')
        sortedProject = resultProjects.sort((a, b) => this.dateSort(a.lastupdate, b.lastupdate))
        this.setState({ resultProjects : sortedProject })
        break;
      default:
        break;
    }
  }

  render() {
    const { resultProjects } = this.state;
    return (
      <div>
        <BackTop />
        <ExploreCondition handleChange={this.handleChange} handleSearch={this.handleSearch} />
        <ExploreResult resultProjects={resultProjects} handleChange={this.handleChange} handleCheck={this.handleCheck} handleSortSelect={this.handleSortSelect} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const fetchGetProjects = state.fetchGetProjects.data;
  return { fetchGetProjects };
}


export default connect(mapStateToProps)(Explore)
