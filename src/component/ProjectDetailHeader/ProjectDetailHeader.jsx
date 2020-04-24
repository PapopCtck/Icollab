import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Typography,
  Button,
  Icon,
  Modal,
  Select,
  Input,
  Form,
  notification,
  message,
  Avatar,
  Rate,
  Empty,
} from 'antd';
import PropTypes from 'prop-types';

import { getCookie } from '../../helpers';

import { fetchGetProfile, fetchReportProject, fetchApplyProject } from '../../actions';

import './StyleProjectDetailHeader.css';

const { Title } = Typography;

const { Option } = Select;

const { TextArea } = Input;

const openNotification = theme => {
  notification['success']({
    message: <span className={theme + '-text'}>Thank you for your report</span>,
    description:
      'We will take a look at your report and take fix the problem as soon as possible.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
    style: theme == 'dark' ? { background: '#29292e', color: '#ffffffd9' } : { background: 'white' },
  });
};

const error = () => {
  message.error('Please login before continue!');
};

const applyError = () => {
  message.error('Unable to apply.Please try again later!');
};

const reportError = () => {
  message.error('Unable to report.Please try again later!');
};

export class DetailHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReport: false,
      reportLoading: false,
      showApply: false,
      user: null,
      applyLoading: false,
    };
    if (getCookie('icollab_userinfo')) {
      const id = JSON.parse(getCookie('icollab_userinfo'))[0].user_uid;
      console.log(id)
      props.dispatch(fetchGetProfile({ id }, getCookie('icollab_token')));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProfile !== this.props.fetchGetProfile) {
      const fetchGetProfile = this.props.fetchGetProfile;
      this.setState({ user: fetchGetProfile.User[0] }, () => console.log(this.state));
    }
    if (prevProps.fetchApplyProject !== this.props.fetchApplyProject) {
      const fetchApplyProject = this.props.fetchApplyProject;
      if (fetchApplyProject.status === 200) {
        this.setState({ applyLoading: false }, () => console.log(this.state));
        this.toggleApply();
        this.props.history.push('/success')
      } else {
        this.toggleApply();
        applyError();
      }
    }
    if (prevProps.fetchReportProject !== this.props.fetchReportProject) {
      const fetchReportProject = this.props.fetchReportProject;
      if (fetchReportProject.status === 200) {
        this.setState({ reportLoading: false }, () => console.log(this.state));
        this.toggleReport();
        openNotification(this.props.theme);
      } else {
        this.toggleReport();
        reportError();
      }
    }
  }

  toggleReport = () => {
    const { showReport } = this.state;
    if (getCookie('icollab_token')) {
      this.setState({
        showReport: !showReport,
      });
    } else {
      error();
    }
  };

  toggleApply = () => {
    const { showApply } = this.state;
    if (getCookie('icollab_token')) {
      this.setState({
        showApply: !showApply,
      });
    } else {
      error();
    }
  };

  handleReportSubmit = (e, validateFieldsAndScroll, resetFields) => {
    this.setState({ reportLoading: true })
    e.preventDefault();
    const token = getCookie('icollab_token');
    if (token) {
      validateFieldsAndScroll((err, reportForm) => {
        if (!err) {
          console.log('Received values of form: ', reportForm);
          this.props.dispatch(fetchReportProject({ projectid: this.props.projectId, ...reportForm }, token));
          resetFields();
        } else {
          this.setState({ reportLoading: false })
        }
      });
    } else {
      error();
    }
  };

  handleApplySubmit = (e, validateFieldsAndScroll, resetFields) => {
    this.setState({ applyLoading: true })
    e.preventDefault();
    const token = getCookie('icollab_token');
    if (token) {
      validateFieldsAndScroll((err, applyForm) => {
        if (!err) {
          console.log('Received values of form: ', applyForm);
          const userInfo = JSON.parse(getCookie('icollab_userinfo'));
          this.props.dispatch(fetchApplyProject({ projectid: this.props.projectId, userid: userInfo[0].user_uid }, token));
          resetFields();
        } else {
          this.setState({ applyLoading: false })
        }
      });
    }
  };

  render() {
    const { showReport, reportLoading, showApply, user, applyLoading } = this.state;
    const { projectDetailAll, theme } = this.props;
    const projectDetail = projectDetailAll.Project[0];
    return (
      <div className="detailheader-container">
        <div className="detailheader-image-container">
          {
            projectDetail.image ?
              <img className="detailheader-image" src={projectDetail.image} alt={projectDetail.image} /> :
              <Empty image="/assets/doge.jpg" imageStyle={{ opacity: 0.4, marginTop: '20px', borderRadius: '15px', width: 'inherit', minWidth: '320px', height: '340px' }} description={<span>Much space, Such empty, WOW!</span>} />
          }
        </div>
        <div className="detailheader-content-container">
          <WrappedReportForm showReport={showReport} loading={reportLoading} theme={theme} toggleReport={this.toggleReport} handleSubmit={this.handleReportSubmit} />
          <WrappedApplyForm showApply={showApply} toggleApply={this.toggleApply} theme={theme} user={user} handleSubmit={this.handleApplySubmit} loading={applyLoading} />
          <div className="detailheader-content-title">
            <Title className={theme + '-text'} level={2}>
              {projectDetail.projecttitle}
            </Title>
          </div>
          <div className="detailheader-content-sub-title" >
            <div className="detailheader-content-level detailheader-carousel-content">
              <span className="bold">level : </span>
              {projectDetail.projectlevel}
              {/* {projectDetail.projectLevel.map((level, idx) => idx === 0 ? level : ', ' + level)} */}
            </div>
            <div className="detailheader-content-role detailheader-carousel-content">
              <span className="bold">role needed : </span>
              {projectDetailAll.RoleNeeded && projectDetailAll.RoleNeeded.length !== 0 ? projectDetailAll.RoleNeeded.map((role, idx) => idx === 0 ? role.jobtitle : ', ' + role.jobtitle) : '-'}
            </div>
            <div className="detailheader-content-industry detailheader-carousel-content">
              <span className="bold">Industry : </span>
              {projectDetail.jobfields}
              {/* {projectDetail.projectIndustry.map((ind, idx) => idx === 0 ? ind : ', ' + ind)} */}
            </div>
            <div className="detailheader-content-location detailheader-carousel-content">
              <span className="bold">location : </span>
              {projectDetail.location}
            </div>
            <div className="detailheader-content-tags detailheader-carousel-content">
              <span className="bold">tags : </span>
              {projectDetail.tags ? projectDetail.tags.map((tag, idx) => idx === 0 ? tag : ', ' + tag) : '-'}
            </div>
            <Button className="detailheader-applybtn" type="primary" block onClick={this.toggleApply}>
              Apply now
            </Button>
            <div className="detailheader-carousel-contact-container">
              <Button className="detailheader-carousel-chatbtn" icon="mail" type="primary" ghost>talk with us!</Button>
              <Icon type="facebook" className="primary-icon social-icon" />
              <Icon type="instagram" className="primary-icon social-icon" />
              <Icon type="twitter" className="primary-icon social-icon" />
              <Icon type="reddit" className="primary-icon social-icon" />
            </div>
            <div className="detailheader-carousel-report-container">
              think this project should be at another level ? <Button className="detailheader-report-button bold" onClick={this.toggleReport} type="link">tell us</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const fetchGetProfile = state.fetchGetProfile.data;
  const fetchApplyProject = state.fetchApplyProject;
  const fetchReportProject = state.fetchReportProject;
  return { fetchGetProfile, fetchApplyProject, fetchReportProject };
}

export default withRouter(connect(mapStateToProps)(DetailHeader));


DetailHeader.propTypes = {
  projectDetail: PropTypes.object,
  projectId: PropTypes.string,
};


const ReportModal = ({ form: { getFieldDecorator, validateFieldsAndScroll, resetFields }, showReport, loading, theme, toggleReport, handleSubmit }) => (
  <Modal
    className="detailheader-report-modal"
    visible={showReport}
    onCancel={toggleReport}
    width={400}
    footer={null}
    bodyStyle={theme == 'dark' ? { background: '#29292e' } : { background: 'white' }}
    centered
  >
    <Form className="report-form"
      onSubmit={e => handleSubmit(e, validateFieldsAndScroll, resetFields, theme)}
    >
      <Title className={theme + '-text'} level={2}>Report</Title>
      <h3 className={theme + '-text'}>Pick a level this project should be</h3>
      <Form.Item>
        {getFieldDecorator('level', {
          rules: [
            {
              required: true,
              message: 'Please specified your reason for this report!',
            },
          ],
        })(
          <Select
            style={{ width: '100%', marginBottom: '10px' }}
            placeholder="Select a reason"
          >
            <Option value="Student">Student</Option>
            <Option value="Startup">SME/Startup</Option>
            <Option value="Industrial">Company/Industrial</Option>
          </Select>,
        )}
      </Form.Item>
      <h3 className={theme + '-text'}>A brief explanation</h3>
      <Form.Item>
        {getFieldDecorator('description', {
          rules: [
            {
              required: false,
            },
          ],
        })(
          <TextArea rows={4} style={{ marginBottom: '20px' }} />,
        )}
      </Form.Item>
      <Button type="primary" htmlType="submit" block loading={loading}>
        Report
      </Button>
    </Form>
  </Modal>
);

export const WrappedReportForm = Form.create({ name: 'report' })(ReportModal);

const ApplyModal = ({ form: { getFieldDecorator, validateFieldsAndScroll, resetFields }, showApply, toggleApply, theme, user, handleSubmit, loading }) => {
  if (user) {
    return (
      <Modal
        visible={showApply}
        width={350}
        footer={null}
        onCancel={toggleApply}
        bodyStyle={theme == 'dark' ? { background: '#29292e' } : { background: 'white' }}
        centered
      >
        <div className="applyModal-container">
          <Avatar className="applyModal-avatar" size={128} icon="user" />
          <Rate className="applyModal-rate" style={{ marginTop: '20px' }} disabled defaultValue={0} />
          <h2 className={'applyModal-username ' + theme + '-text'}>{user.name + ' ' + user.lastname}</h2>
          <h3 className={theme + '-text'}>Applied for</h3>
          <Form className="apply-form"
            onSubmit={e => handleSubmit(e, validateFieldsAndScroll, resetFields)}
          >
            <Form.Item>
              {getFieldDecorator('position', {
                rules: [
                  {
                    required: true,
                    message: 'Please specified your position for this application!',
                  },
                ],
              })(
                <Select
                  style={{ width: '100%', marginBottom: '10px' }}
                  placeholder="Select a reason"
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>,
              )}
            </Form.Item>
            <p className={theme + '-text'}>by clicking apply you agree to our Term of Service and Privacy Policy</p>
            <Button htmlType="submit" type="primary" block loading={loading}>
              Apply
            </Button>
          </Form>
        </div>
      </Modal>
    )
  }
  return null;
}

export const WrappedApplyForm = Form.create({ name: 'apply' })(ApplyModal);
