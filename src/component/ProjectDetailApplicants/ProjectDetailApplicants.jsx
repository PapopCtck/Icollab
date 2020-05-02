import React, { Component } from 'react';
import { Checkbox, Divider, Select, Avatar, Icon, Modal, Rate, Button, notification } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchGetParticipants, fetchDeleteParticipant } from '../../actions';

import { getCookie, Loading } from '../../helpers';

import './StyleProjectDetailApplicants.css';


const { Option } = Select;

const openNotification = (theme, status) => {
  notification[status]({
    message: <span className={theme + '-text'}>{status === 'success' ? 'Success' : 'Error'}</span>,
    description: status === 'success' ? 'Participant deleted.' : 'Something went wrong.Please try again later',
    style: theme == 'dark' ? { background: '#29292e', color: '#ffffffd9' } : { background: 'white' },
  });
};

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
        this.setState({ participants: fetchGetParticipants.participant, loading: false });
      } else {
        this.setState({ loading: false });
      }
    }
    if (prevProps.fetchDeleteParticipant !== this.props.fetchDeleteParticipant) {
      const fetchDeleteParticipant = this.props.fetchDeleteParticipant;
      if (fetchDeleteParticipant.status === 200) {
        openNotification(this.props.theme, 'success');
      } else {
        openNotification(this.props.theme, 'error');
      }

    }
  }

  toggleModal = (participant) => {
    if (participant) {
      this.setState({ showModal: !this.state.showModal, participant });
    } else {
      this.setState({ showModal: !this.state.showModal });
    }
  }

  handleDelete = (participant) => {
    this.props.dispatch(fetchDeleteParticipant({ participantid: participant.user_uid, projectid: this.props.projectId }, getCookie('icollab_token')));
    this.setState({ showModal: false });
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
          participant ? <AcceptModal visible={showModal} toggleModal={this.toggleModal} theme={theme} participant={participant} handleDelete={this.handleDelete} /> : null
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
  const fetchDeleteParticipant = state.fetchDeleteParticipant;
  return { fetchGetParticipants, fetchDeleteParticipant };
}

export default connect(mapStateToProps)(ProjectDetailApplicants);

ProjectDetailApplicants.propTypes = {
  theme: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  fetchGetParticipants: PropTypes.object,
  fetchDeleteParticipant: PropTypes.object,
  projectId: PropTypes.string,
}

const UserBar = ({ theme, toggleModal, participant }) => (
  <div className="userbar-container">
    <Checkbox disabled />
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

UserBar.propTypes = {
  theme: PropTypes.string, 
  toggleModal:PropTypes.func, 
  participant: PropTypes.object,
}

const AcceptModal = ({ visible, toggleModal, theme, participant, handleDelete }) => (
  <Modal
    visible={visible}
    onCancel={() => toggleModal()}
    footer={false}
    width={400}
    closeIcon={<Icon type="close" style={theme == 'dark' ? { color: 'white' } : { color: 'black' }} />}
    bodyStyle={theme == 'dark' ? { background: '#29292e' } : { background: 'white' }}
  >
    <Avatar className="applyModal-avatar" size={128} src={participant.image ? participant.image : null}>{participant.name.substr(0, 2)}</Avatar>
    <Rate className="applyModal-rate" style={{ marginTop: '20px' }} disabled defaultValue={0} />
    <h2 className={'applyModal-username ' + theme + '-text'}>{participant.name + ' ' + participant.lastname}</h2>
    <p className={'acceptModal-text ' + theme + '-text'}>{participant.jobposition}</p>
    <p className={'acceptModal-text ' + theme + '-text'}>Skills : {participant.skills}</p>
    <p className={'acceptModal-text ' + theme + '-text'}>Location : {participant.location}</p>
    <span className="accpetModal-button-container">
      <Button size="large" type="danger" onClick={() => handleDelete(participant)} ghost>Delete</Button>
      <Button size="large"
        type="primary"
        style={{ marginLeft: '10px' }}
        block
        href={`mailto:${participant.email}?&body=%0D%0A%0D%0A Sending from icollab.cc`}
        target="_blank"
      >
        Contact with Email
      </Button>
    </span>
  </Modal>
)

AcceptModal.propTypes = {
  visible: PropTypes.bool, 
  toggleModal: PropTypes.func, 
  theme: PropTypes.string, 
  participant: PropTypes.object, 
  handleDelete: PropTypes.func,
}
