import React, { Component } from 'react';
import { Select, Button, Typography, Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

import { MainNav } from '../../component';

import './StyleCreateBasicDetail.css';

const { Title } = Typography;
const { Option } = Select;
const { Header, Content } = Layout;

export class CreateBasicDetail extends Component {
  render() {
    const { onFinishBasic, show, onSelect } = this.props;
    return (

      <QueueAnim className="create-basic" delay={500} type={['bottom', 'top']} ease={['easeOutQuart', 'easeInOutQuart']}>
        {show ? [
          <QueueAnim key="page-container" type="bottom">
            <Layout className="create-basic-layout">
              <Header className="header-container">
                <MainNav />
              </Header>
              <Content>
                <div className="create-basic-container">
                  <QueueAnim key="page" type="bottom">
                    <div className="create-basic-header-container">
                      <Title level={2} className="create-title">First, let&apos;s fill in the basic detail</Title>
                      <p className="create-basic-subheader" key="p" >
                        we need these detail to match you up with appropriate community.You can always update this later.
                      </p>
                    </div>
                    <div className="create-basic-select-container">
                      <QueueAnim type="bottom" >
                        <div className="create-basic-select">
                          <h4 className="create-basic-select-label">project category</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={(value) => onSelect(value, 'category')}
                            filterOption={(input, option) =>
                              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </div>
                        <div className="create-basic-select">
                          <h4 className="create-basic-select-label">location</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={(value) => onSelect(value, 'location')}
                            filterOption={(input, option) =>
                              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </div>
                        <div className="create-basic-select">
                          <h4 className="create-basic-select-label">skill level</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={(value) => onSelect(value, 'skill')}
                            filterOption={(input, option) =>
                              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </div>
                        <div className="create-basic-select-button">
                          <Button type="primary" onClick={onFinishBasic}>Finish</Button>
                        </div>
                      </QueueAnim>
                    </div>
                  </QueueAnim>
                </div>
              </Content>
            </Layout>
          </QueueAnim>,
        ] : null
        }
      </QueueAnim>
    )
  }
}

export default CreateBasicDetail

CreateBasicDetail.propTypes = {
  onFinishBasic: PropTypes.func, 
  show: PropTypes.bool, 
  onSelect: PropTypes.func,
}
