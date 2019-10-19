import React, { Component } from 'react'
import { Layout } from 'antd';


import { MainNav, MainFooter, ProjectDetailHeader, ProjectDetailContent } from '../../component';

import './StyleProjectDetail.css';

const { Header, Content, Footer } = Layout;

export class ProjectDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      projectDetail: {
        projectId: '1',
        projectTitle: 'Beach trash collector robot',
        projectLevel: ['enterprise'],
        roleNeeded: ['mechanical Engineer'],
        projectIndustry: ['robotic','mechanic'],
        projectLocation: 'Bangkok',
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
            <ProjectDetailHeader projectDetail={projectDetail} projectId={this.props.match.params.id}/>
            {/* projectId is temp will remove in the future */}
            <ProjectDetailContent/>
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
