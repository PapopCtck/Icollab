import React, { Component } from 'react';
import { Select, Input } from 'antd';

import { ThailandStateSelect } from '../../helpers'

import './StyleExploreCondition.css';

const { Option } = Select;
const { Search } = Input;

export class ExploreCondition extends Component {


  render() {
    return (
      <div className="explore-condition-container">
        <div className="page-wrapper">
          <div className="explore-condition-select-container">
            <Select
              className="explore-condition-select"
              mode="multiple"
              placeholder="Select category"
              onChange={this.props.handleChange}
            >
              <Option value="computer">Computer</Option>
              <Option value="mechanic">Mechanic</Option>
              <Option value="robotic">Robotic</Option>
            </Select>
            <Select className="explore-condition-select" placeholder="Select Role" onChange={this.props.handleChange}>
              <Option value="developer">Developer</Option>
              <Option value="engineer">Engineer</Option>
            </Select>
            <ThailandStateSelect onChange={this.props.handleChange}/>
          </div>
          <div className="bold explore-condition-or">
            - OR -
          </div>
          <div className="explore-condition-search-container">
            <Search
              className="explore-condition-search"
              placeholder="input search text"
              onSearch={this.props.handleSearch}
            />

          </div>
        </div>
      </div>

    )
  }
}

export default ExploreCondition
