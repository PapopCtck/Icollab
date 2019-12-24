import React, { Component } from 'react';
import { Input, Typography, Select } from 'antd';
import QueueAnim from 'rc-queue-anim';


import {
  TabsBar,
  Tab,
  ImageUploader,
} from '../../helpers';

import './StyleCreateDetail.css';

const { Title } = Typography;

export class CreateDetail extends Component {
  render() {
    const { show, onInput, onSelect, imageUrl, onImageUpload, setImage } = this.props;
    return (
      <div className="create-detail-container">
        <QueueAnim className="create-basic" delay={1000} type={['bottom', 'top']} ease={['easeOutQuart', 'easeInOutQuart']}>
          {!show ? [
            <QueueAnim key="page" type="bottom">
              <TabsBar>
                <Tab label="Basic" >
                  <Title level={4} className="create-title">Basic information</Title>
                  <p className="create-description">
                    Make a good first impression: introduce your project objectives and entice people to learn more.
                      This basic information will represent your project on your project page, on your project card,
                      and in searches.</p>
                  <CreateDetailBasic onInput={onInput} onSelect={onSelect} imageUrl={imageUrl} onImageUpload={onImageUpload} setImage={setImage} />
                </Tab>
                <Tab label="Story">
                  <Title level={4} className="create-title">Story</Title>
                  <p className="create-description">
                   Tell people why they should be excited about your project. Get specific but be clear and be brief..</p>
                  <CreateDetailBasic onInput={onInput} onSelect={onSelect} imageUrl={imageUrl} onImageUpload={onImageUpload} setImage={setImage} />
                </Tab>
                <Tab label="FAQ">
                  test3
                </Tab>
                <Tab label="People">
                  test4
                </Tab>
                <Tab label="Extras">
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

export const CreateDetailBasic = ({ onInput, onSelect, imageUrl, onImageUpload, setImage }) => (
  <div className="create-detail-basic-container">
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Title</h4>
      <p className="regular">what is the title of your project?</p>
      <Input placeholder="Basic usage" id="projectTitle" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Tagline</h4>
      <p className="regular">Provide a short description that best describes your project to your audience.</p>
      <Input placeholder="Basic usage" id="projectTagline" onChange={onInput} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Project Image</h4>
      <p className="regular">Upload a square image that represents your project.</p>
      <ImageUploader imageUrl={imageUrl} onImageUpload={onImageUpload} setImage={setImage} />
    </div>
    <div className="create-detail-basic-option">
      <h4 className="bold">Tags</h4>
      <p className="regular">Enter up to five keywords that best describe your project.</p>
      <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={(change) => onSelect(change, 'tags')} />
    </div>
  </div>
);
