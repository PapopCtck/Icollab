import React, { Component } from 'react';
import { Select, Button, Typography, Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

import { MainNav } from '../../component';
import { ThailandStateSelect } from '../../helpers';

import AppLang from '../../AppContext';

import content from './LangCreateDetail';

import './StyleCreateBasicDetail.css';

const { Title } = Typography;
const { Option } = Select;
const { Header, Content } = Layout;

export class CreateBasicDetail extends Component {
  renderCategory = (Category) => (
    Category.map(e => <Option value={e}>{e}</Option>)
  );

  render() {
    const { onFinishBasic, show, handleChange, setLang, setTheme, projectCategory } = this.props;
    const { appLang, appTheme } = this.context;
    return (
      <QueueAnim className="create-basic" delay={300} type={['bottom', 'top']} ease={['easeOutQuart', 'easeInOutQuart']}>
        {show ? [
          <QueueAnim key="page-container" type="bottom">
            <Layout className="create-basic-layout">
              <Header className={'header-container ' + appTheme}>
                <MainNav appTheme={appTheme} appLang={appLang} setLang={setLang} setTheme={setTheme} />
              </Header>
              <Content>
                <div className={'create-basic-container ' + appTheme}>
                  <QueueAnim key="page" type="bottom">
                    <div className="create-basic-header-container">
                      <Title level={2} className={'create-title ' + appTheme + '-text'}>{content[appLang].title}</Title>
                      <p className="create-basic-subheader" key="p" >
                        {content[appLang].description}
                      </p>
                    </div>
                    <div className="create-basic-select-container">
                      <QueueAnim type="bottom" >
                        <div className="create-basic-select">
                          <h4 className={'create-basic-select-label ' + appTheme + '-text'}>{content[appLang].category}</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder={content[appLang].selectCategory}
                            optionFilterProp="children"
                            onChange={(value) => handleChange(value, 'category')}
                            filterOption={(input, option) =>
                              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {this.renderCategory(projectCategory)}
                          </Select>
                        </div>
                        <div className="create-basic-select">
                          <h4 className={'create-basic-select-label ' + appTheme + '-text'}>{content[appLang].location}</h4>
                          <ThailandStateSelect style={{ width: 300 }} placeholder={content[appLang].selectLocation} onChange={(value) => handleChange(value, 'location')} />
                        </div>
                        <div className="create-basic-select">
                          <h4 className={'create-basic-select-label ' + appTheme + '-text'}>{content[appLang].level}</h4>
                          <Select
                            style={{ width: 300 }}
                            placeholder={content[appLang].selectLevel}
                            optionFilterProp="children"
                            onChange={(value) => handleChange(value, 'projectLevel')}
                            filterOption={(input, option) =>
                              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="Student">Student</Option>
                            <Option value="Startup">SME/Startup</Option>
                            <Option value="Industrial">Company/Industrial</Option>
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
