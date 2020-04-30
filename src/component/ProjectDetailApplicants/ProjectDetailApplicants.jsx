import React, { Component } from 'react';
import { Checkbox, Divider, Select, Avatar, Icon, Modal, Rate, Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchGetParticipants } from '../../actions';

import { getCookie, Loading } from '../../helpers';

import './StyleProjectDetailApplicants.css';


const { Option } = Select;

class ProjectDetailApplicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      participants: [],
      loading: true,
      participant: null,
    }
    props.dispatch(fetchGetParticipants({ projectid: props.projectId }, getCookie('icollab_token')));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetParticipants !== this.props.fetchGetParticipants) {
      const fetchGetParticipants = this.props.fetchGetParticipants;
      if (fetchGetParticipants) {
        this.setState({ participants: fetchGetParticipants.participant, loading: false }, () => console.log(this.state));
      } else {
        this.setState({ loading: false });
      }
    }
  }

  toggleModal = (participant) => {
    if(participant){
      this.setState({ showModal: !this.state.showModal,participant },() => console.log(this.state));
    } else {
      this.setState({ showModal: !this.state.showModal },() => console.log(this.state));
    }
   
  }

  renderCategory = (participants) => (
    participants.map(participant => <UserBar participant={participant} theme={this.props.theme} toggleModal={this.toggleModal} />)
  );

  render() {
    const { participants, loading, showModal, participant } = this.state;
    const { theme } = this.props;
    if (loading) {
      return <Loading />
    }
    return (
      <div>
        {
          participant ? <AcceptModal visible={showModal} toggleModal={this.toggleModal} theme={theme} participant={participant} /> : null
        }
        <div className="projectpanel-header">
          <span className="projectpanel-left">
            <Checkbox disabled />
            <Divider type="vertical" />
            <Select
              style={{ width: 120 }}
              placeholder="options"
              disabled
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
              disabled
            >
              <Option value="trending">Trending</Option>
              <Option value="dateAdded">Date Added</Option>
              <Option value="lastUpdate">Last Update</Option>
            </Select>
          </span>
        </div>
        <div className="projectdetail-applicants-userbar-container">
          {
            this.renderCategory(participants)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const fetchGetParticipants = state.fetchGetParticipants.data;
  return { fetchGetParticipants };
}

export default connect(mapStateToProps)(ProjectDetailApplicants);

ProjectDetailApplicants.propTypes = {
  theme: PropTypes.string,
}

const UserBar = ({ theme, toggleModal, participant }) => (
  <div className="userbar-container">
    <Checkbox disabled/>
    <Divider type="vertical" />
    <Avatar src={participant.image ? participant.image : null}>{participant.name.substring(0, 2)}</Avatar>
    <div className="userbar-userinfo-container">
      <span className={'bold ' + theme + '-text'}>
        {participant.name + ' ' + participant.lastname}
      </span>
      <span className={theme + '-text'}>
        {participant.jobposition}
      </span>
      <span className={'userbar-skills ' + theme + '-text'}>
        {participant.skills}
      </span>
      <span className={theme + '-text'}>
        {participant.location}
      </span>
      <Icon className={theme + '-text'} type="more" rotate={90} style={{ fontSize: 25, verticalAlign: 'middle', cursor: 'pointer' }} onClick={() => toggleModal(participant)} />
    </div>

  </div>
);

const AcceptModal = ({ visible, toggleModal, theme, participant }) => (
  <Modal
    visible={visible}
    onCancel={() => toggleModal()}
    footer={false}
    width={400}
    bodyStyle={theme == 'dark' ? { background: '#29292e' } : { background: 'white' }}
  >
    <Avatar className="applyModal-avatar" size={128} src={participant.image ? participant.image : null}>{participant.name.substr(0,2)}</Avatar>
    <Rate className="applyModal-rate" style={{ marginTop: '20px' }} disabled defaultValue={0} />
    <h2 className={'applyModal-username ' + theme + '-text'}>{participant.name + ' ' + participant.lastname}</h2>
    <p className={'acceptModal-text ' + theme + '-text'}>{participant.jobposition}</p>
    <p className={'acceptModal-text ' + theme + '-text'}>Skills : {participant.skills}</p>
    <p className={'acceptModal-text ' + theme + '-text'}>Location : {participant.location}</p>
    <span className="accpetModal-button-container">
      <Button size="large" type="primary" onClick={() => toggleModal()} ghost>Hide</Button>
      <Button size="large" type="primary" block>Contact</Button>
    </span>
  </Modal>
)
