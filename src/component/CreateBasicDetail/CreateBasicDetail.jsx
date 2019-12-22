import React, { Component } from 'react';
import { Select, Button, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './StyleCreateBasicDetail.css';

const { Title } = Typography;
const { Option } = Select;

export class CreateBasicDetail extends Component {
  render() {
    const { onFinishBasic, show } = this.props;
    return (
      <div className="create-basic-container">
        <QueueAnim type={['bottom', 'top']} >
          {show ? [
            <QueueAnim key="page" type="bottom">
              <div className="create-basic-header-container">
                <Title level={2} className="login-title">First, let&apos;s fill in the basic detail</Title>
                <p className="create-basic-subheader" key="p" >
                  we need these detail to match you up with appropriate community.You can always update this later.
                </p>
              </div>
              <div className="create-basic-select-container">
                <QueueAnim type="bottom" >
                  <div className="create-basic-select">
                    <h4 className="create-basic-select-label">project category</h4>
                    <Select
                      style={{ width: 200 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={this.onChange}
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
                      style={{ width: 200 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={this.onChange}
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
                      style={{ width: 200 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={this.onChange}
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

            </QueueAnim>,
          ] : null}
        </QueueAnim>
      </div>
    )
  }
}

export default CreateBasicDetail
