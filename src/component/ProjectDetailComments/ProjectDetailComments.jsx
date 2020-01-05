import React, { Component } from 'react';
import { Comment, Tooltip, Avatar, Input, Form, Button } from 'antd';
import { Link } from 'react-router-dom';

import { formatDate, timeSince } from '../../helpers';

import './StyleProjectDetailComments.css'

const { TextArea } = Input;

//todo use this to render comment list
// const CommentList = ({ comments }) => (
//   <List
//     dataSource={comments}
//     header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
//     itemLayout="horizontal"
//     renderItem={props => <Comment {...props} />}
//   />
// );

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

export class ProjectDetailComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      value: null,
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ value: e.target.value })
  }

  handleSubmit = (obj) => {
    //todo add submit comment here
    console.log(obj)
    this.setState({ submitting: true })
    setTimeout(() => {
      this.setState({ submitting: false })
    }, 1000)
  }

  render() {
    const { submitting, value } = this.state;
    return (
      <div className="projectdetail-comments-container">
        <div className="projectdetail-main">
          <Editor
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            submitting={submitting}
            value={value}
          />
          <Comment
            author="Han Solo"
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={formatDate(new Date())}>
                <span>{timeSince(new Date())}</span>
              </Tooltip>
            }
          />
        </div>
        <div className="projectdetail-sider">
          <div className="bold">
            This is your space to offer support and feedback.
            Remember to be constructive
            there&apos;s a human behind this project.
          </div>
          <div className="bold">
            Have a question for the creator?
          </div>
          <Link to="#" className="bold">
            Check this project&apos;s FAQ
          </Link>
        </div>
      </div>
    )
  }
}

export default ProjectDetailComments
