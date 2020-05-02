import React from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox, Divider, Select, Collapse, Icon, Menu, Dropdown } from 'antd';
import PropTypes from 'prop-types';

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
  function onEditClick(target) {
    props.history.push('/editproject/' + target)
  }
  return (
    <div className="projectpanel-container">
      <div className="projectpanel-header">
        <span className="projectpanel-left">
          <Checkbox
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
          props.resultProjects.map(project => <ProjectCollapsePanel handleTitleClick={handleTitleClick} project={project} appTheme={props.appTheme} applied={props.applied} onEditClick={onEditClick} />)
        }
      </div>
    </div>
  )
}

ProjectPanel.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  resultProjects: PropTypes.array,
  appTheme: PropTypes.string,
  applied: PropTypes.bool,
}

export default withRouter(ProjectPanel);

const ProjectCollapsePanel = ({ project, handleTitleClick, applied, onEditClick, appTheme }) => {
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
      className={'projectcollapse-container ' + appTheme}
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
            >
            </Checkbox>
            <span onClick={() => handleTitleClick(project.project_uid)}>
              <img className="projectcollapse-header-image" alt="project" src={project.image ? project.image : '/assets/doge.jpg'}></img>
              <span className={'bold ' + appTheme + '-text'}>{project.projecttitle}</span>
            </span>
          </div>
        }>{
          !applied ?
            <div className="projectcollapse-content">
              <span className={'bold ' + appTheme + '-text'}>Created on : </span>
              <span className={appTheme + '-text'}>{new Date(parseInt(project.created)).toLocaleDateString('en-GB')}</span>
              <span className={'bold ' + appTheme + '-text'}>Status : </span>
              <span className={appTheme + '-text'}>{project.adminapprove ? 'Approved' : 'Waiting for approval'}</span>
              <span className={'bold ' + appTheme + '-text'}>View : </span>
              <span className={appTheme + '-text'}>{project.view}</span>
              <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                <Icon type="setting" theme="filled" style={appTheme === 'dark' ? { fontSize: '18px', color: '#fafafa' } : { fontSize: '18px', color: '#333' }} />
              </Dropdown>
            </div>
            : null
        }
      </Panel>
    </Collapse>
  )
};

ProjectCollapsePanel.propTypes = {
  project: PropTypes.object,
  handleTitleClick: PropTypes.func,
  applied: PropTypes.bool,
  onEditClick: PropTypes.func,
  appTheme: PropTypes.string,
}
