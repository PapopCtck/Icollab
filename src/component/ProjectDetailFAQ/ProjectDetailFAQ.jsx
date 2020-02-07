import React, { Component } from 'react';
import { Collapse, Button } from 'antd';
import PropTypes from 'prop-types';

import './StyleProjectDetailFAQ.css';

const { Panel } = Collapse;

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
    const { data } = this.props;
    return (
      <div className="projectdetail-faq-container">
        <div className="projectdetail-main">
          <Collapse
            bordered={false}
            expandIconPosition="right"
          >
            {
              data.projectFAQ.map((faq, index) => (
                <Panel header={<span className="bold">{faq.question}</span>} key={index} style={customPanelStyle}>
                  <p>{faq.answer}</p>
                </Panel>
              ))
            }
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

export default ProjectDetailFAQ;

ProjectDetailFAQ.propTypes = {
  data: PropTypes.object,
}
