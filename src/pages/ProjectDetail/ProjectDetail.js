import React, { Component } from 'react'
import { Layout } from 'antd';


import { MainNav, MainFooter, ProjectDetailHeader, ProjectDetailContent } from '../../component';

import './StyleProjectDetail.css';

const { Header, Content, Footer } = Layout;

export class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectDetail: {
        projectId: '1',
        projectTitle: 'Beach trash collector robot',
        projectLevel: ['enterprise'],
        roleNeeded: [{ title : 'mechanical Engineer', jobSkill : ['Python', 'C++', 'Linux', 'R'] ,jobDescription: 'you will be develop a program with a computer to control our precious robot that can save a humanity ...' , neededAmount: 1 , gotAmount: 0 }],
        projectIndustry: ['robotic', 'mechanic'],
        projectLocation: 'Bangkok',
        projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
        projectThumbnail: 'https://static.pexels.com/photos/302889/pexels-photo-302889.jpeg',
        projectStarters: [
          {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Brenda Mercer',
            userAssociation: ['MIT Student', 'Computer Engineering'],
            projectRole: 'project starter',
          },
          {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Jonathan Walker',
            userAssociation: ['MIT Student', 'Computer Engineering'],
            projectRole: 'lead designer',
          },
          {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Anne Voorhees',
            userAssociation: ['MIT Student', 'Computer Engineering'],
            projectRole: 'advisor',
          },
        ],
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
            <ProjectDetailHeader projectDetail={projectDetail} projectId={this.props.match.params.id} />
            {/* projectId is temp will remove in the future */}
            <ProjectDetailContent projectDetail={projectDetail} />
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
