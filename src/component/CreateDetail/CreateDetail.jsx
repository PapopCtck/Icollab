import React, { Component } from 'react';
import { Input, Typography, Select } from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

import {
  TabsBar,
  Tab,
  ImageUploader,
} from '../../helpers';

import './StyleCreateDetail.css';

const { Title } = Typography;

export class CreateDetail extends Component {
  render() {
    const { show, onInput, onSelect, imageUrl, onImageUpload, setImage, onFinish } = this.props;
    return (
      <div className="create-detail-container">
        <QueueAnim className="create-basic" delay={1000} type={['bottom', 'top']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {!show ? [
            <QueueAnim key="page" type="bottom">
              <TabsBar onFinish={onFinish}>
                <Tab label="Basic" header="Basic information" >
                  <Title level={4} className="create-title">Basics</Title>
                  <p className="create-description">
                    Make a good first impression: introduce your project objectives and entice people to learn more.
                      This basic information will represent your project on your project page, on your project card,
                      and in searches.</p>
                  <CreateDetailBasic
                    onInput={onInput}
                    onSelect={onSelect}
                    imageUrl={imageUrl}
                    onImageUpload={onImageUpload}
                    setImage={setImage} />
                </Tab>
                <Tab label="Story" header="Project Story">
                  <Title level={4} className="create-title">Story</Title>
                  <p className="create-description">
                    Tell people why they should be excited about your project. Get specific but be clear and be brief..</p>
                  <CreateDetailBasic onInput={onInput} onSelect={onSelect} imageUrl={imageUrl} onImageUpload={onImageUpload} setImage={setImage} />
                </Tab>
                <Tab label="FAQ" header="Frequently Ask Question">
                  test3
                </Tab>
                <Tab label="People" header="Add People">
                  test4
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
}

export const CreateDetailBasic = ({ onInput, onSelect, imageUrl, onImageUpload, setImage }) => (
  <div className="create-detail-basic-container">
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Title</h4>
      <p className="regular">what is the title of your project?</p>
      <Input style={{ maxWidth: '700px' }} placeholder="Basic usage" id="projectTitle" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Tagline</h4>
      <p className="regular">Provide a short description that best describes your project to your audience.</p>
      <Input style={{ maxWidth: '700px' }} placeholder="Basic usage" id="projectTagline" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Image</h4>
      <p className="regular">Upload a square image that represents your project.</p>
      <ImageUploader imageUrl={imageUrl} onImageUpload={onImageUpload} setImage={setImage} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Tags</h4>
      <p className="regular">Enter up to five keywords that best describe your project.</p>
      <Select mode="tags" style={{ width: '100%', maxWidth: '700px' }} placeholder="Tags Mode" onChange={(change) => onSelect(change, 'tags')} />
    </div>
  </div>
);

CreateDetailBasic.propTypes = {
  onInput: PropTypes.func,
  onSelect: PropTypes.func,
  imageUrl: PropTypes.string,
  onImageUpload: PropTypes.func,
  setImage: PropTypes.func,
}
