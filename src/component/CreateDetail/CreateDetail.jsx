import React, { Component } from 'react';
import { Input, Typography, Select } from 'antd';
import ReactQuill from 'react-quill';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

import {
  TabsBar,
  Tab,
  ImageUploader,
  DynamicForm,
  UserSearch,
} from '../../helpers';

import 'react-quill/dist/quill.snow.css';

import './StyleCreateDetail.css';

const { Title } = Typography;

export class CreateDetail extends Component {
  render() {
    const { show, onInput, handleChange, imageUrl, onFinish, projectStory, setLang } = this.props;
    return (
      <div className="create-detail-container">
        <QueueAnim className="create-basic" delay={650} type={['bottom', 'top']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {!show ? [
            <QueueAnim key="page" type="bottom">
              <TabsBar onFinish={onFinish} setLang={setLang} >
                <Tab label="Basic" header="Basic information" >
                  <Title level={4} className="create-title">Basics</Title>
                  <p className="create-description">
                    Make a good first impression: introduce your project objectives and entice people to learn more.
                      This basic information will represent your project on your project page, on your project card,
                      and in searches.</p>
                  <CreateDetailBasic
                    onInput={onInput}
                    handleChange={handleChange}
                    imageUrl={imageUrl}
                  />
                </Tab>
                <Tab label="Story" header="Project Story">
                  <Title level={4} className="create-title">Story</Title>
                  <p className="create-description">
                    Tell people why they should be excited about your project. Get specific but be clear and be brief..</p>
                  <CreateStory handleChange={handleChange} value={projectStory} />
                </Tab>
                <Tab label="FAQ" header="Frequently Ask Question">
                  <Title level={4} className="create-title">FAQ</Title>
                  <p className="create-description">
                    The FAQ section should provide the most common details that peoples are looking for when evaluating your project.</p>
                  <DynamicForm onChange={handleChange} />
                </Tab>
                <Tab label="People" header="Add People">
                  <Title level={4} className="create-title">Contributor</Title>
                  <p className="create-description">
                    Add people who are working for this project or contribute something to the project.</p>
                  <UserSearch style={{ maxWidth: '700px' }} />
                </Tab>
                <Tab label="Extras" header="Extras">
                  test5
                </Tab>
              </TabsBar>
            </QueueAnim>,
          ] : null}

        </QueueAnim>
      </div>
    )
  }
}

export default CreateDetail;

CreateDetail.propTypes = {
  show: PropTypes.bool,
  onInput: PropTypes.func,
  onSelect: PropTypes.func,
  imageUrl: PropTypes.string,
  onImageUpload: PropTypes.func,
  setImage: PropTypes.func,
  onFinish: PropTypes.func,
  handleChange: PropTypes.func,
  setLang: PropTypes.func,
  projectStory: PropTypes.string,
}

export const CreateDetailBasic = ({ onInput, handleChange, imageUrl }) => (
  <div className="create-detail-basic-container">
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Title</h4>
      <p className="regular">what is the title of your project?</p>
      <Input style={{ maxWidth: '700px' }} placeholder="Basic usage" id="projectTitle" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Tagline</h4>
      <p className="regular">Provide a short description that best describes your project to your audience.</p>
      <Input style={{ maxWidth: '700px' }} placeholder="Basic usage" id="projectDescription" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Image</h4>
      <p className="regular">Upload a square image that represents your project.</p>
      <ImageUploader imageUrl={imageUrl} handleChange={handleChange} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Tags</h4>
      <p className="regular">Enter up to five keywords that best describe your project.</p>
      <Select mode="tags" style={{ width: '100%', maxWidth: '700px' }} placeholder="Tags Mode" onChange={(change) => handleChange(change, 'tags')} />
    </div>
  </div>
);

CreateDetailBasic.propTypes = {
  onInput: PropTypes.func,
  onSelect: PropTypes.func,
  imageUrl: PropTypes.string,
  onImageUpload: PropTypes.func,
  setImage: PropTypes.func,
  handleChange: PropTypes.func,
}

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
}

const formats = [
  'header', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
]

export const CreateStory = ({ handleChange, value }) => (
  <div className="create-detail-story-container">
    <h4 className="bold">Project Description</h4>
    <p className="regular">Describe what you planning to do, why are you doing it, how you plan to make it happen, and who you are.</p>
    <ReactQuill
      className="create-detail-story-editor"
      placeholder="Write a story of your project. Don't be shy."
      theme="snow"
      onChange={(html) => handleChange(html, 'projectStory')}
      value={value}
      modules={modules}
      formats={formats}
    />
  </div>
)

CreateStory.propTypes = {
  onInput: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}
