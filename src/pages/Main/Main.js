import React, { Component } from 'react'

import { Layout } from 'antd';

import { MainNav,MainFooter } from '../../component';

import './StyleMain.css';

const { Header, Content, Footer, Sider } = Layout;

export class Main extends Component {
  render() {
    return (
      <Layout className="layout" style={{ height: '100vh', width: '100vw' }}>
        <MainNav></MainNav>
        <Header>
        </Header>
        <Layout>
          <Sider className="sider"/>
          <Content style={{ padding: '0 50px', height: '200px' }}>
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
