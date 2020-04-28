import React, { Component } from 'react';
import { Tabs, Typography } from 'antd';
import { connect } from 'react-redux';

import { ProjectPanel } from '../../component';

import { fetchTrackOwnedProject } from '../../actions';

import './StyleTrackProject.css';

import { getCookie, Loading } from '../../helpers';
import AppLang from '../../AppContext';

const { Title } = Typography;

const { TabPane } = Tabs;


export class TrackProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultProjects: null,
    };
    const userInfo = JSON.parse(getCookie('icollab_userinfo'));
    props.dispatch(fetchTrackOwnedProject({ ownerid: userInfo[0].user_uid }, getCookie('icollab_token')));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchTrackProject !== this.props.fetchTrackProject) {
      const fetchTrackProject = this.props.fetchTrackProject;
      this.setState({ resultProjects: fetchTrackProject }, () => console.log(this.state));
    }
  }

  render() {
    const { appTheme } = this.context;
    const { resultProjects } = this.state;
    if (!resultProjects) {
      return <div className={'main-loading ' + appTheme}><Loading /></div>
    }
    return (
      <div className="page-wrapper">
        <Title level={3} className="trackproject-title bold">Track your project</Title>
        <Tabs tabBarStyle={{ 'borderBottom': 'none', marginLeft: '20px' }} defaultActiveKey="1" animated={false}>
          <TabPane tab="All" key="1">
            <ProjectPanel resultProjects={resultProjects.owner} />
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

const mapStateToProps = state => {
  const fetchTrackProject = state.fetchTrackProject.data;
  return { fetchTrackProject };
}

TrackProject.contextType = AppLang;

export default connect(mapStateToProps)(TrackProject);
