import React, { Component } from 'react';
import { Select, Input, Tooltip } from 'antd';
import PropTypes from 'prop-types';

import { ThailandStateSelect } from '../../helpers'

import './StyleExploreCondition.css';

const { Option } = Select;
const { Search } = Input;

export class ExploreCondition extends Component {

  renderOption = (array) => (
    array.map(e => <Option value={e}>{e}</Option>)
  );

  render() {
    const { appLang, content, handleSearch, handleSearchChange, handleChange, appTheme, projectCategory, jobTitles } = this.props;
    const text = <span>{content[appLang].textPopupSearch}</span>;
    return (
      <div className="explore-condition-container" style={appTheme === 'dark' ? { background: 'url("/assets/explore-banner-dark.jpg")' } : { background: 'url("/assets/explore-banner.jpg")' }}>
        <div className="page-wrapper">
          <div className="explore-condition-select-container">
            <Select
              className="explore-condition-select"
              mode="multiple"
              placeholder={content[appLang].selectCatagory}
              onChange={e => handleChange(e, 'jobfields')}
            >
              {this.renderOption(projectCategory)}
            </Select>
            <Select
              showSearch
              className="explore-condition-select"
              placeholder={content[appLang].selectRole}
              onChange={e => handleChange(e, 'jobtitle')}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="">None</Option>
              {this.renderOption(jobTitles)}
            </Select>
            <ThailandStateSelect placeholder={content[appLang].selectState} onChange={e => handleChange(e, 'location')} />
          </div>
          <div className="bold explore-condition-or">
            - {content[appLang].or} -
          </div>
          <div className="explore-condition-search-container">
            <Tooltip placement="topLeft" title={text}>
              <Search
                className="explore-condition-search"
                placeholder={content[appLang].searchText}
                onSearch={handleSearch}
                onChange={handleSearchChange}
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
  appLang: PropTypes.string,
  content: PropTypes.object,
  handleSearchChange: PropTypes.func,
}
