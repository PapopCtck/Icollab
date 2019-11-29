import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      this.setState({ resultProjects: fetchGetProjects.Project },() => console.log(this.state));
    }
  }

  handleChange = (text) => {
    console.log(text);
  }

  handleSearch = (text) => {
    console.log(text);
  }

  handleCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    const { resultProjects } = this.state;
    return (
      <div>
        <ExploreCondition handleChange={this.handleChange} handleSearch={this.handleSearch} />
        <ExploreResult resultProjects={resultProjects} handleChange={this.handleChange} handleCheck={this.handleCheck} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const fetchGetProjects = state.fetchGetProjects.data;
  return { fetchGetProjects };
}


export default connect(mapStateToProps)(Explore)
