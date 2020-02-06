import React, { Component } from 'react';
import { Select, Input, Tooltip } from 'antd';
import PropTypes from 'prop-types';

import { ThailandStateSelect } from '../../helpers'

import './StyleExploreCondition.css';

const { Option } = Select;
const { Search } = Input;

export class ExploreCondition extends Component {


  render() {
    const { appLang,content } = this.props;
    const text = <span>{content[appLang].textPopupSearch}</span>;
    return (
      <div className="explore-condition-container">
        <div className="page-wrapper">
          <div className="explore-condition-select-container">
            <Select
              className="explore-condition-select"
              mode="multiple"
              placeholder={content[appLang].selectCatagory}
              onChange={this.props.handleChange}
            >
              <Option value="computer">Computer</Option>
              <Option value="mechanic">Mechanic</Option>
              <Option value="robotic">Robotic</Option>
            </Select>
            <Select className="explore-condition-select" placeholder={content[appLang].selectRole} onChange={this.props.handleChange}>
              <Option value="developer">Developer</Option>
              <Option value="engineer">Engineer</Option>
            </Select>
            <ThailandStateSelect placeholder={content[appLang].selectState} onChange={this.props.handleChange} />
          </div>
          <div className="bold explore-condition-or">
            - {content[appLang].or} -
          </div>
          <div className="explore-condition-search-container">
            <Tooltip placement="topLeft" title={text}>
              <Search
                className="explore-condition-search"
                placeholder={content[appLang].searchText}
                onSearch={this.props.handleSearch}
                onChange={this.props.handleSearchChange}
              />
            </Tooltip>
          </div>
        </div>
      </div>

    )
  }
}

export default ExploreCondition;

ExploreCondition.propTypes = {
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func,
}
