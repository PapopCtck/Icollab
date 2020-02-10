import React, { Component } from 'react';
import { Select, Button, Typography, Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

import { MainNav } from '../../component';

import AppLang from '../../AppContext';

import content from './LangCreateDetail';

import './StyleCreateBasicDetail.css';

const { Title } = Typography;
const { Option } = Select;
const { Header, Content } = Layout;

export class CreateBasicDetail extends Component {
  render() {
    const { onFinishBasic, show, handleChange, setLang } = this.props;
    const appLang = this.context;
    return (
      <QueueAnim className="create-basic" delay={300} type={['bottom', 'top']} ease={['easeOutQuart', 'easeInOutQuart']}>
        {show ? [
          <QueueAnim key="page-container" type="bottom">
            <Layout className="create-basic-layout">
              <Header className="header-container">
                <MainNav appLang={appLang} setLang={setLang} />
              </Header>
              <Content>
                <div className="create-basic-container">
                  <QueueAnim key="page" type="bottom">
                    <div className="create-basic-header-container">
                      <Title level={2} className="create-title">{content[appLang].title}</Title>
                      <p className="create-basic-subheader" key="p" >
                        {content[appLang].description}
                      </p>
                    </div>
                    <div className="create-basic-select-container">
                      <QueueAnim type="bottom" >
                        <div className="create-basic-select">
                          <h4 className="create-basic-select-label">{content[appLang].category}</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder={content[appLang].selectCategory}
                            optionFilterProp="children"
                            onChange={(value) => handleChange(value, 'category')}
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
                          <h4 className="create-basic-select-label">{content[appLang].location}</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder={content[appLang].selectLocation}
                            optionFilterProp="children"
                            onChange={(value) => handleChange(value, 'location')}
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
                          <h4 className="create-basic-select-label">{content[appLang].level}</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder={content[appLang].selectLevel}
                            optionFilterProp="children"
                            onChange={(value) => handleChange(value, 'skill')}
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
                          <Button type="primary" onClick={onFinishBasic}>{content[appLang].finishBtn}</Button>
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

CreateBasicDetail.contextType = AppLang;

export default CreateBasicDetail

CreateBasicDetail.propTypes = {
  onFinishBasic: PropTypes.func,
  show: PropTypes.bool,
  onSelect: PropTypes.func,
  handleChange: PropTypes.func,
  setLang: PropTypes.func,
}
