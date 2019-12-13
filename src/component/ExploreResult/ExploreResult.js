import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox, Select, Row, Col, Card, Icon, Button } from 'antd';

import { Loading, timeSince } from '../../helpers';

import './StyleExploreResult.css';

const { Option } = Select;

const { Meta } = Card;

export class ExploreResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      cardCount: 9,
    };
  }

  onCardClick = (target) => {
    this.props.history.push('/project/' + target)
  }

  loadMore = () => {
    const { cardCount } = this.state;
    this.setState({
      cardCount: cardCount + 9,
    })
  }

  renderCard = (resultProjects, count) => {
    let returnArray = [];
    for (let index = 0; index < count && index < resultProjects.length; index++) {
      const project = resultProjects[index];
      returnArray.push(
        <Col xs={24} sm={12} md={12} lg={8} >
          <Card
            onClick={() => this.onCardClick(project.project_uid)}
            style={{ width: 325, margin: '20px auto', maxHeight: '450px', minHeight: '450px' }}
            cover={
              <img
                style={{ maxHeight: '240px', minHeight: '240px' }}
                alt="example"
                src={project.image ? project.image : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
              />
            }
          >
            <Meta
              title={project.projecttitle}
              description={
                <div className="explore-card-container">
                  <div className="explore-card-description-text">
                    {project.projectdescription}
                  </div>
                  <div className="explore-card-role">
                    {/* role needed : {project.roleneeded.map((role, idx) => idx === 0 ? role.title : ', ' + role.title)} */}
                    role needed : {project.roleneeded}
                  </div>
                  <div className="explore-card-bottom">
                    <span className="explore-card-bottom-left">
                      <Icon type="clock-circle" />
                      <span className="explore-card-time-text">{timeSince(project.createat)}</span>
                    </span>
                    {/* <span className="explore-card-bottom-right">by {project.projectStarters[0].fullName}</span> */}
                    <span className="explore-card-bottom-right">by {project.projectstarters ? project.projectstarters : 'John doe'}</span>
                  </div>
                </div>
              }
            />
          </Card>
        </Col>
      )
    }
    return returnArray;
  }

  render() {
    const { cardCount } = this.state;
    const { resultProjects, handleSortSelect } = this.props;
    if (!resultProjects) {
      return <Loading />
    }
    return (
      <div className="page-wrapper">
        <div className="explore-result-container">
          <div className="explore-result-head-container">
            <span className="explore-result-head-left">
              <span className="explore-result-title bold explore-result-head-text">
                Explore
              </span>
              <span className="bold explore-result-head-text primary-text">
                {resultProjects.length} Project
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
                <Select defaultValue="DateAdded" style={{ width: 120 }} onChange={handleSortSelect}>
                  <Option value="DateAdded">Date Added</Option>
                  <Option value="Trending">Trending</Option>
                  <Option value="Update">Latest update</Option>
                </Select>
              </span>
            </span>
          </div>
          <div className="explore-result-body-container">
            <Row gutter={[16, 16]}>
              {this.renderCard(resultProjects, cardCount)}
            </Row>
          </div>
          <div className="explore-result-foot-container">
            <Button size="large" type="primary" disabled={cardCount >= resultProjects.length} onClick={this.loadMore}>
              {cardCount >= resultProjects.length ? 'No more' : 'Show more!'}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ExploreResult)
