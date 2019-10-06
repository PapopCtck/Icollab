import React, { Component } from 'react'

import { Layout } from 'antd';

import { MainNav, MainFooter, LandingCarousel } from '../../component';

import './StyleMain.css';

const { Header, Content, Footer, Sider } = Layout;

export class Main extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header-container">
          <MainNav />
        </Header>
        <Layout>
          <Sider className="sider" />
          <Content >
            <div className="landing-title">
              <span className="bold">FEATURED</span>
            </div>
            <LandingCarousel>
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
            <div className="regular">
              this is regular
            </div>
            <div className="bold">
              this is bold
            </div>
          </Content>
          <Sider className="sider" />
        </Layout>
        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    )
  }
}

export default Main
