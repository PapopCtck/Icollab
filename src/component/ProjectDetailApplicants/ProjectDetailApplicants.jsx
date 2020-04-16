import React, { useState } from 'react';
import { Checkbox, Divider, Select, Avatar, Icon, Modal, Rate, Button } from 'antd';
import PropTypes from 'prop-types';

import './StyleProjectDetailApplicants.css';

const { Option } = Select;

function ProjectDetailApplicants({ theme }) {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <div>
      <AcceptModal visible={showModal} toggleModal={toggleModal} theme={theme} />
      <div className="projectpanel-header">
        <span className="projectpanel-left">
          <Checkbox />
          <Divider type="vertical" />
          <Select
            style={{ width: 120 }}
            placeholder="options"
          >
            <Option value="hide">Hide</Option>
            <Option value="mark">Mark as read</Option>
            <Option value="delete">Delete</Option>
          </Select>
        </span>
        <span className="projectpanel-right">
          <span className={'projectpanel-right-sortby regular ' + theme + '-text'}>Sort by</span>
          <Select
            style={{ width: 120 }}
            defaultValue="trending"
          >
            <Option value="trending">Trending</Option>
            <Option value="dateAdded">Date Added</Option>
            <Option value="lastUpdate">Last Update</Option>
          </Select>
        </span>
      </div>
      <div className="projectdetail-applicants-userbar-container">
        {/* todo render this as a list */}
        <UserBar theme={theme} toggleModal={toggleModal} />
        <UserBar theme={theme} toggleModal={toggleModal} />
      </div>
    </div>
  )
}

export default ProjectDetailApplicants;

ProjectDetailApplicants.propTypes = {
  theme: PropTypes.string,
}

const UserBar = ({ theme, toggleModal }) => (
  <div className="userbar-container">
    <Checkbox />
    <Divider type="vertical" />
    <Avatar icon="user" />
    <div className="userbar-userinfo-container">
      <span className={'bold ' + theme + '-text'}>
        Daniel Tucker
      </span>
      <span className={theme + '-text'}>
        Programmer
      </span>
      <span className={theme + '-text'}>
        3/11/20
      </span>
      <span className={theme + '-text'}>
        Computer engineering
      </span>
      <Icon className={theme + '-text'} type="more" rotate={90} style={{ fontSize: 25, verticalAlign: 'middle', cursor: 'pointer' }} onClick={toggleModal} />
    </div>

  </div>
);

const AcceptModal = ({ visible, toggleModal, theme }) => (
  <Modal
    visible={visible}
    onCancel={toggleModal}
    footer={false}
    width={400}
    bodyStyle={theme == 'dark' ? { background: '#29292e' } : { background: 'white' }}
  >
    <Avatar className="applyModal-avatar" size={128} icon="user" />
    <Rate className="applyModal-rate" style={{ marginTop: '20px' }} disabled defaultValue={0} />
    <h2 className={'applyModal-username ' + theme + '-text'}>Alexandra Wong (26)</h2>
    <p className={'acceptModal-text '+ theme + '-text'}>Computer engineer, UCL</p>
    <p className={'acceptModal-text '+ theme + '-text'}>Skills : Robotic , Circuit , Electronic</p>
    <p className={'acceptModal-text '+ theme + '-text'}>Applied for : Programmer</p>
    <span className="accpetModal-button-container">
      <Button size="large" type="primary" ghost>Hide</Button>
      <Button size="large" type="primary" block>Contact</Button>
    </span>
  </Modal>
)
