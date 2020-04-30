import React from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox, Divider, Select, Collapse, Icon, Menu, Dropdown } from 'antd';

import './StyleProjectPanel.css';

const { Option } = Select;

const { Panel } = Collapse;

const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 24,
  border: '0.5px solid var(--main-border-color)',
  overflow: 'hidden',
};

function ProjectPanel(props) {
  function handleTitleClick(project_uid) {
    props.history.push('/project/' + project_uid)
  }
  function onEditClick(target){
    props.history.push('/editproject/' + target)
  }
  return (
    <div className="projectpanel-container">
      <div className="projectpanel-header">
        <span className="projectpanel-left">
          <Checkbox
            // indeterminate={this.state.indeterminate}
            // onChange={this.onCheckAllChange}
            // checked={this.state.checkAll}
            disabled
          />
          <Divider type="vertical" />
          <Select
            style={{ width: 120 }}
            placeholder="options"
            disabled
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
            disabled
          >
            <Option value="trending">Trending</Option>
            <Option value="dateAdded">Date Added</Option>
            <Option value="lastUpdate">Last Update</Option>
          </Select>
        </span>
      </div>
      <div className="projectpanel-content">
        {
          props.resultProjects.map(project => <ProjectCollapsePanel handleTitleClick={handleTitleClick} project={project} applied={props.applied} onEditClick={onEditClick} />)
        }
      </div>
    </div>
  )
}

export default withRouter(ProjectPanel);

const ProjectCollapsePanel = ({ project, handleTitleClick, applied, onEditClick }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => onEditClick(project.project_uid)}>Edit project</Menu.Item>
      <Menu.Item key="2" disabled>Delete project</Menu.Item>
    </Menu>
  );
  return (
    <Collapse
      bordered={false}
      expandIconPosition="right"
    >
      <Panel
        key="1"
        style={customPanelStyle}
        showArrow={!applied}
        header={
          <div className="projectcollapse-header">
            <Checkbox
              disabled
              onClick={event => {
                event.stopPropagation();
              }}
            // onChange={this.onCheckChange}
            // checked={this.state.check}
            >
            </Checkbox>
            <span onClick={() => handleTitleClick(project.project_uid)}>
              <img className="projectcollapse-header-image" src={project.image ? project.image : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}></img>
              <span className="bold">{project.projecttitle}</span>
            </span>
          </div>
        }>{
          !applied ?
            <div className="projectcollapse-content">
              <span className="bold">Created on : </span>
              <span>{new Date(parseInt(project.created)).toLocaleDateString('en-GB')}</span>
              <span className="bold">Status : </span>
              <span>{project.adminapprove ? 'Approved' : 'Waiting for approval'}</span>
              <span className="bold">View : </span>
              <span>{project.view}</span>
              <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                <Icon type="setting" theme="filled" style={{ fontSize: '18px' }} />
              </Dropdown>,
            </div>
            : null
        }
      </Panel>
    </Collapse>
  )
};
