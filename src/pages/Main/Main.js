import React, { Component } from 'react'

import { Layout } from 'antd';

import {
  MainNav,
  MainFooter,
  LandingCarousel,
  LandingTrendingCard,
  LandingStartProject,
} from '../../component';

import './StyleMain.css';

const { Header, Content, Footer } = Layout;

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredProject: [
        {
          projectId: '1',
          projectTitle: 'Beach trash collector robot 1',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Brenda Mercer',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
        {
          projectId: '2',
          projectTitle: 'Beach trash collector robot 2',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {
            userImg: 'BM',
            userId: '01231234',
            fullName: 'Brenda Mercer',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
        {
          projectId: '3',
          projectTitle: 'Beach trash collector robot 3',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {

            userId: '01231234',
            fullName: 'Brenda Mercer',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
      ],
      trendingProject: [
        {
          projectId: '4',
          projectTitle: 'One developer one cat',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Brenda Mercer',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
        {
          projectId: '5',
          projectTitle: 'I don\'t like sand',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Anakin Skywalker',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
        {
          projectId: '6',
          projectTitle: 'It\'s probably cold to go alone',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Mr.lonely',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
        {
          projectId: '7',
          projectTitle: 'One developer one cat 2',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash or something even longer bra bra bra',
          projectStarter: {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Brenda Mercer',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
        {
          projectId: '8',
          projectTitle: 'I don\'t like sand 2',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Anakin Skywalker',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
        {
          projectId: '9',
          projectTitle: 'It\'s probably cold to go alone 2',
          projectLevel: ['enterprise'],
          roleNeeded: ['mechanical Engineer'],
          projectDescription: '...A project that aim to save the world. Nowadays people seems to ignore how much we destroy our earth with or trash',
          projectStarter: {
            userImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userId: '01231234',
            fullName: 'Mr.lonely',
            userAssociation: ['MIT Student', 'Computer Engineering'],
          },
        },
      ],
    }
  }
  
  render() {
    const { featuredProject, trendingProject } = this.state;
    return (
      <Layout className="layout">
        <Header className="header-container">
          <MainNav />
        </Header>
        <Layout>
          <Content >
            <div className="page-wrapper">
              <div className="landing-title">
                <span className="bold">FEATURED</span>
              </div>
              <LandingCarousel featuredProject={featuredProject} />
              <LandingTrendingCard trendingProject={trendingProject} />
              <LandingStartProject />
            </div>
          </Content>
        </Layout>
        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    )
  }
}

export default Main
