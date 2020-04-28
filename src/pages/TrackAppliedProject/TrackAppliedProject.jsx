import React, { Component } from 'react';
import { Tabs, Typography } from 'antd';
import { connect } from 'react-redux';

import { ProjectPanel } from '../../component';

import { fetchAppliedProject } from '../../actions';

import { getCookie, Loading } from '../../helpers';
import AppLang from '../../AppContext';

const { Title } = Typography;

const { TabPane } = Tabs;


export class TrackAppliedProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const userInfo = JSON.parse(getCookie('icollab_userinfo'));
    props.dispatch(fetchAppliedProject({ userid: userInfo[0].user_uid }, getCookie('icollab_token')));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchAppliedProject !== this.props.fetchAppliedProject) {
      const fetchAppliedProject = this.props.fetchAppliedProject;
      this.setState({ resultProjects: fetchAppliedProject }, () => console.log(this.state));
    }
  }

  render() {
    const { resultProjects } = this.state;
    const { appTheme } = this.context;
    if (!resultProjects) {
      return <div className={'main-loading ' + appTheme}><Loading /></div>
    }
    return (
      <div className="page-wrapper">
        <Title level={3} className="trackproject-title bold">Applied project</Title>
        <Tabs tabBarStyle={{ 'borderBottom': 'none', marginLeft: '20px' }} defaultActiveKey="1" animated={false}>
          <TabPane tab="All" key="1">
            <ProjectPanel resultProjects={resultProjects.participants} applied/>
          </TabPane>
          <TabPane tab="Open" key="2" disabled>
            open
          </TabPane>
          <TabPane tab="Closed" key="3" disabled>
            close
          </TabPane>
          <TabPane tab="Draft" key="4" disabled>
            draft
          </TabPane>
          <TabPane tab="Action require" key="5" disabled>
            action
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

TrackAppliedProject.contextType = AppLang;

const mapStateToProps = state => {
  const fetchAppliedProject = state.fetchAppliedProject.data;
  return { fetchAppliedProject };
}

export default connect(mapStateToProps)(TrackAppliedProject);
