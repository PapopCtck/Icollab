import React, { Component } from 'react';
import { Tabs, Typography } from 'antd';
import { connect } from 'react-redux';

import { ProjectPanel } from '../../component';

import { fetchTrackProject } from '../../actions';

import './StyleTrackProject.css';

import { getCookie } from '../../helpers';

const { Title } = Typography;

const { TabPane } = Tabs;


export class TrackProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const userInfo = JSON.parse(getCookie('icollab_userinfo'));
    props.dispatch(fetchTrackProject({ id: userInfo[0].user_uid }, getCookie('icollab_token')));
  }
  render() {
    return (
      <div className="page-wrapper">
        <Title level={3} className="trackproject-title bold">Track your project</Title>
        <Tabs tabBarStyle={{ 'borderBottom': 'none', marginLeft: '20px' }} defaultActiveKey="1" animated={false}>
          <TabPane tab="All" key="1">
            <ProjectPanel />
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

export default connect(mapStateToProps)(TrackProject);
