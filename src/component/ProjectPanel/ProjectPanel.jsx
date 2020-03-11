import React from 'react';
import { Checkbox, Divider, Select, Collapse } from 'antd';

import './StyleProjectPanel.css';

const { Option } = Select;

const { Panel } = Collapse;

const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 24,
  border: '0.5px solid var(--main-border-color)',
  overflow: 'hidden',
};

export default function ProjectPanel() {
  return (
    <div className="projectpanel-container">
      <div className="projectpanel-header">
        <span className="projectpanel-left">
          <Checkbox
          // indeterminate={this.state.indeterminate}
          // onChange={this.onCheckAllChange}
          // checked={this.state.checkAll}
          />
          <Divider type="vertical" />
          <Select
            style={{ width: 120 }}
            placeholder="options"
          >
            <Option value="hide">Hide</Option>
            <Option value="mark">Mark as read</Option>
            <Option value="delete">Delete</Option>
          </Select>
        </span>
        <span className="projectpanel-right">
          <span className="projectpanel-right-sortby regular">Sort by</span>
          <Select
            style={{ width: 120 }}
            defaultValue="trending"
          >
            <Option value="trending">Trending</Option>
            <Option value="dateAdded">Date Added</Option>
            <Option value="lastUpdate">Last Update</Option>
          </Select>
        </span>
      </div>
      <div className="projectpanel-content">
        <ProjectCollapsePanel />
      </div>
    </div>
  )
}

const ProjectCollapsePanel = () => (
  <Collapse
    bordered={false}
    expandIconPosition="right"
  >
    <Panel header={
      <div className="projectcollapse-header">
        <Checkbox
          onClick={event => {
            event.stopPropagation();
          }}
        // onChange={this.onCheckChange}
        // checked={this.state.check}
        >
        </Checkbox>
        <img className="projectcollapse-header-image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"></img>
        <span className="bold">something</span>
      </div>

    }
    key="1"
    style={customPanelStyle}>
      <p>test</p>
    </Panel>
  </Collapse>

);
