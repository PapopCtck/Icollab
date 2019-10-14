import React, { Component } from 'react'
import { Layout } from 'antd';


import { MainNav, MainFooter } from '../../component';

import './StyleProjectDetail.css';

const { Header, Content, Footer } = Layout;

export class ProjectDetail extends Component {
  render() {
    return (
      <Layout>
        <Header className="header-container">
          <MainNav />
        </Header>
        <Content>
          <div className="page-wrapper project-detail-container">
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
