import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox, Select, Row, Col, Card, Icon, Button } from 'antd';

import './StyleExploreResult.css';

const { Option } = Select;

const { Meta } = Card;

export class ExploreResult extends Component {
  constructor(props){
    super(props);
    this.state={
      loading: false,
    };
  }

  onCardClick = (target) => {
    this.props.history.push('/project/' + target)
  }

  loadMore = () => {
    this.setState({
      loading: true,
    })
  }

  render() {
    const { resultProjects } = this.props;
    return (
      <div className="page-wrapper">
        <div className="explore-result-container">
          <div className="explore-result-head-container">
            <span className="explore-result-head-left">
              <span className="explore-result-title bold explore-result-head-text">
                Explore
              </span>
              <span className="bold explore-result-head-text primary-text">
                999 Project
              </span>
              <span className="explore-result-head-text">
                in
              </span>
              <span className="bold explore-result-head-text primary-text">
                ALL CATAGORIES
              </span>
            </span>
            <span className="explore-result-head-right">
              <span className="bold">
                <Checkbox onChange={this.props.handleCheck}>Student</Checkbox>
                <Checkbox onChange={this.props.handleCheck}>SME / Startup</Checkbox>
                <Checkbox onChange={this.props.handleCheck}>Company / Industrial</Checkbox>
              </span>
              <span className="bold explore-result-sortby">
                <span className="explore-result-sortby-text">Sort by</span>
                <Select defaultValue="Trending" style={{ width: 120 }} onChange={this.props.handleChange}>
                  <Option value="Trending">Trending</Option>
                  <Option value="DateAdded">Date Added</Option>
                  <Option value="Update">Latest update</Option>
                </Select>
              </span>
            </span>
          </div>
          <div className="explore-result-body-container">
            <Row gutter={[16, 16]}>
              {
                resultProjects.map((project) =>
                  <Col xs={24} sm={12} md={12} lg={8} >
                    <Card
                      onClick={() => this.onCardClick(project.projectId)}
                      style={{ width: 325, margin: '20px auto', maxHeight: '425px' }}
                      cover={
                        <img
                          alt="example"
                          src={project.projectThumbnail ? project.projectThumbnail : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
                        />
                      }
                    >
                      <Meta
                        title={project.projectTitle}
                        description={
                          <div className="explore-card-container">
                            <div className="explore-card-description-text">
                              {project.projectDescription}
                            </div>
                            <div className="explore-card-role">
                              role needed : {project.roleNeeded.map((role, idx) => idx === 0 ? role.title : ', ' + role.title)}
                            </div>
                            <div className="explore-card-bottom">
                              <span className="explore-card-bottom-left">
                                <Icon type="clock-circle" />
                                <span className="explore-card-time-text">2m ago</span>
                              </span>
                              <span className="explore-card-bottom-right">by {project.projectStarters[0].fullName}</span>
                            </div>
                          </div>
                        }
                      />
                    </Card>
                  </Col>
                )}
            </Row>
          </div>
          <div className="explore-result-foot-container">
            <Button size="large" type="primary" loading={this.state.loading} onClick={this.loadMore}>
              Show more!
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ExploreResult)
