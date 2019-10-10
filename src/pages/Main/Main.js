import React, { Component } from 'react'

import { Layout } from 'antd';

import { MainNav, MainFooter, LandingCarousel } from '../../component';

import './StyleMain.css';

const { Header, Content, Footer } = Layout;

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredProject: [
        {
          projectTitle: 'Beach trash collector robot 1',
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
    }
  }
  render() {
    const { featuredProject } = this.state;
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
              <LandingCarousel featuredProject={featuredProject}>
                <div className="slide1">
                  <h3>1</h3>
                </div>
                <div className="slide2">
                  <h3>2</h3>
                </div>
                <div className="slide3">
                  <h3>3</h3>
                </div>
              </LandingCarousel>
              <span className="bold">TRENDING</span>
              <div className="regular">
                this is regular
              </div>
              <div className="bold">
                this is bold
              </div>
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
