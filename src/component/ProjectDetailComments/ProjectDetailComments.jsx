import React, { Component } from 'react';
import { Comment, Tooltip, Avatar, Input, Form, Button, List } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { formatDate, timeSince } from '../../helpers';

import './StyleProjectDetailComments.css'

const { TextArea } = Input;

//todo use this to render comment list
const CommentList = ({ comments, theme }) => (
  <List
    dataSource={comments}
    header={<div className={theme + '-text'}>{comments.length + ' '}{comments.length > 1 ? 'replies' : 'reply'}</div>}
    itemLayout="horizontal"
    renderItem={item =>
      <Comment
        className={theme + '-text'}
        author={<div className={theme + '-subtext'}>{item.author.fullName}</div>}
        avatar={
          <Avatar
            src={item.author.userImg ? item.author.userImg : null}
            alt={item.author.fullName}
          >{item.author.fullName.substring(0, 2)}</Avatar>
        }
        content={
          <p>
            {item.description}
          </p>
        }
        datetime={
          <Tooltip title={item.updatedAt ? formatDate(item.updatedAt) : formatDate(item.createdAt)}>
            <span>{item.updatedAt ? timeSince(item.updatedAt) : timeSince(item.createdAt)}</span>
          </Tooltip>
        }
      />}
  />
);

CommentList.propTypes = {
  comments: PropTypes.array,
  theme: PropTypes.string,
}

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

Editor.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  value: PropTypes.string,
}

export class ProjectDetailComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      value: null,
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = () => {
    this.setState({ submitting: true })
    setTimeout(() => {
      this.setState({ submitting: false })
    }, 1000)
  }

  render() {
    const { submitting, value } = this.state;
    const { data, theme } = this.props;
    return (
      <div className="projectdetail-comments-container">
        <div className="projectdetail-main">
          <Editor
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            submitting={submitting}
            value={value}
          />
          <CommentList theme={theme} comments={data.projectComments} />
        </div>
        <div className={'projectdetail-sider ' + theme + '-text' }>
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

export default ProjectDetailComments;

ProjectDetailComments.propTypes = {
  data: PropTypes.object,
  theme: PropTypes.string,
}
