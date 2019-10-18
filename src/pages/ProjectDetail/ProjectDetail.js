import React, { Component } from 'react'
import { Layout } from 'antd';


import { MainNav, MainFooter, ProjectDetailHeader } from '../../component';

import './StyleProjectDetail.css';

const { Header, Content, Footer } = Layout;

export class ProjectDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      projectDetail: {
        projectId: '1',
        projectTitle: 'Beach trash collector robot 1',
        projectLevel: ['enterprise'],
        roleNeeded: ['mechanical Engineer'],
        projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
        projectThumbnail: 'https://static.pexels.com/photos/302889/pexels-photo-302889.jpeg',
        projectStarter: {
          userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          userId: '01231234',
          fullName: 'Brenda Mercer',
          userAssociation: ['MIT Student', 'Computer Engineering'],
        },
      },
    }
  }
  render() {
    const { projectDetail } = this.state;
    return (
      <Layout>
        <Header className="header-container">
          <MainNav />
        </Header>
        <Content>
          <div className="page-wrapper project-detail-container">
            <ProjectDetailHeader projectDetail={projectDetail} />
            ProjectDetail
            {this.props.match.params.id}
          </div>
        </Content>
        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    )
  }
}

export default ProjectDetail
