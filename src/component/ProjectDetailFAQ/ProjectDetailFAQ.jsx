import React, { Component } from 'react';
import { Collapse, Button } from 'antd';
import PropTypes from 'prop-types';

import './StyleProjectDetailFAQ.css';

const { Panel } = Collapse;

export class ProjectDetailFAQ extends Component {
  render() {
    const { projectDetailAll, theme } = this.props;
    const customPanelStyle = {
      borderRadius: 4,
      marginBottom: 24,
      padding: 10,
      paddingBottom: 5,
      border: theme === 'dark' ? '0.5px solid var(--card-background-dark)' : '0.5px solid var(--main-border-color)',
      overflow: 'hidden',
      backgroundColor: theme === 'dark' ? 'var(--card-background-dark)' : 'var(--card-background-color)',
    };
    return (
      <div className="projectdetail-faq-container">
        <div className="projectdetail-main">
          <Collapse
            bordered={false}
            expandIconPosition="right"
            style={{ transition: '0.3s all', backgroundColor: theme === 'dark' ? 'var(--main-background-dark)' : 'var(--card-background-color)' }}
          >
            {
              projectDetailAll.QuestionList.map((faq, index) => (
                <Panel header={<span className={'bold ' + theme + '-text'}>{faq.question}</span>} key={index} style={customPanelStyle}>
                  <p className={theme + '-text'}>{faq.answer}</p>
                </Panel>
              ))
            }
          </Collapse>
        </div>
        <div className="projectdetail-sider">
          <div className={'bold ' + theme + '-text'}>
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
