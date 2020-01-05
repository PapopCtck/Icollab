import React, { Component } from 'react';
import { Collapse, Button } from 'antd';

import './StyleProjectDetailFAQ.css';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 24,
  padding: 10,
  paddingBottom: 5,
  border: '0.5px solid var(--main-border-color)',
  overflow: 'hidden',
};

export class ProjectDetailFAQ extends Component {
  render() {
    return (
      <div className="projectdetail-faq-container">
        <div className="projectdetail-main">
          <Collapse
            bordered={false}
            expandIconPosition="right"
          >
            <Panel header={<span className="bold">This is panel header 1</span>} key="1" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header={<span className="bold">This is panel header 2</span>} key="2" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header={<span className="bold">This is panel header 3</span>} key="3" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
        <div className="projectdetail-sider">
          <div className="bold">
            Don&apos;t see the answer to your question?
            Ask us in chat!
          </div>
          <Button type="primary">Ask a question</Button>
        </div>
      </div>
    )
  }
}

export default ProjectDetailFAQ
