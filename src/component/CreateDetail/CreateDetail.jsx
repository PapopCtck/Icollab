import React, { Component } from 'react';
import { Input, Typography, Select } from 'antd';
import ReactQuill from 'react-quill';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

import {
  TabsBar,
  Tab,
  ImageUploader,
  UserSearch,
} from '../../helpers';

import { QAForm } from '../QAForm/QAForm';
import { PeopleForm } from '../PeopleForm/PeopleForm';

import AppLang from '../../AppContext';
import content from './LangCreateDetail';

import 'react-quill/dist/quill.snow.css';
import './StyleCreateDetail.css';

const { Title } = Typography;

export class CreateDetail extends Component {
  render() {
    const { show, onInput, handleChange, imageUrl, onFinish, projectStory, setLang, setTheme, loading } = this.props;
    const { appLang, appTheme } = this.context;
    return (
      <div className="create-detail-container">
        <QueueAnim className="create-basic" delay={650} type={['bottom', 'top']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {!show ? [
            <QueueAnim key="page" type="bottom">
              <TabsBar onFinish={onFinish} setLang={setLang} setTheme={setTheme} content={content[appLang]} loading={loading} >
                <Tab label={content[appLang].basic.title} header={content[appLang].basic.header} >
                  <Title level={4} className={'create-title ' + appTheme + '-text'}>{content[appLang].basic.title}</Title>
                  <p className="create-description">{content[appLang].basic.description}</p>
                  <CreateDetailBasic
                    onInput={onInput}
                    handleChange={handleChange}
                    imageUrl={imageUrl}
                    appTheme={appTheme}
                    content={content[appLang].basic}
                  />
                </Tab>
                <Tab label={content[appLang].story.title} header={content[appLang].story.header}>
                  <Title level={4} className={'create-title ' + appTheme + '-text'}>{content[appLang].story.title}</Title>
                  <p className="create-description">{content[appLang].story.description}</p>
                  <CreateStory handleChange={handleChange} value={projectStory} content={content[appLang].story} appTheme={appTheme} />
                </Tab>
                <Tab label={content[appLang].faq.title} header={content[appLang].faq.header}>
                  <Title level={4} className={'create-title ' + appTheme + '-text'}>{content[appLang].faq.title}</Title>
                  <p className="create-description">{content[appLang].faq.description}</p>
                  <QAForm onChange={handleChange} content={content[appLang].faq} appTheme={appTheme} />
                </Tab>
                <Tab label={content[appLang].contributor.title} header={content[appLang].contributor.header}>
                  <Title level={4} className={'create-title ' + appTheme + '-text'}>{content[appLang].contributor.title}</Title>
                  <p className="create-description">{content[appLang].contributor.description}</p>
                  <UserSearch style={{ maxWidth: '700px' }} onChange={handleChange} />
                </Tab>
                <Tab label={content[appLang].people.title} header={content[appLang].people.header}>
                  <Title level={4} className={'create-title ' + appTheme + '-text'}>{content[appLang].people.title}</Title>
                  <p className="create-description">{content[appLang].people.description}</p>
                  <PeopleForm onChange={handleChange} content={content[appLang].people} appTheme={appTheme} />
                </Tab>
              </TabsBar>
            </QueueAnim>,
          ] : null}

        </QueueAnim>
      </div>
    )
  }
}

CreateDetail.contextType = AppLang;

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
  setLang: PropTypes.func.isRequired,
  projectStory: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export const CreateDetailBasic = ({ onInput, handleChange, imageUrl, content, appTheme }) => (
  <div className="create-detail-basic-container">
    <div className="create-detail-basic-option">
      <h4 className={'bold ' + appTheme + '-text'}>{content.projectTitle}<span className="red-star">*</span></h4>
      <p className="regular">{content.projectTitleDescription}</p>
      <Input style={{ maxWidth: '700px' }} placeholder={content.projectTitle} id="projectTitle" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className={'bold ' + appTheme + '-text'}>{content.projectTagline}<span className="red-star">*</span></h4>
      <p className="regular">{content.projectTaglineDescription}</p>
      <Input style={{ maxWidth: '700px' }} placeholder={content.projectTagline} id="projectDescription" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className={'bold ' + appTheme + '-text'}>{content.projectImage}</h4>
      <p className="regular">{content.projectImageDescription}</p>
      <ImageUploader imageUrl={imageUrl} handleChange={handleChange} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className={'bold ' + appTheme + '-text'}>{content.projectTags}<span className="red-star">*</span></h4>
      <p className="regular">{content.projectTagsDescription}</p>
      <Select mode="tags" style={{ width: '100%', maxWidth: '700px' }} placeholder={content.projectTags} onChange={(change) => handleChange(change, 'tags')} />
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
  content: PropTypes.object,
  appTheme: PropTypes.string,
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

export const CreateStory = ({ handleChange, value, content, appTheme }) => (
  <div className="create-detail-story-container">
    <h4 className={'bold ' + appTheme + '-text'}>{content.projectDesc}<span className="red-star">*</span></h4>
    <p className="regular">{content.projectDescDescription}</p>
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
  content: PropTypes.object,
  appTheme: PropTypes.string,
}
