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
} from 'antd';
import PropTypes from 'prop-types';

import { getCookie } from '../../helpers';

import { fetchGetProfile } from '../../actions';

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
      props.dispatch(fetchGetProfile({ id },getCookie('icollab_token')));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProfile !== this.props.fetchGetProfile) {
      const fetchGetProfile = this.props.fetchGetProfile;
      this.setState({ user: fetchGetProfile.User[0] }, () => console.log(this.state));
    }
  }

  toggleReport = () => {
    const { showReport } = this.state;
    this.setState({
      showReport: !showReport,
    });
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

  handleReportSubmit = (e, validateFieldsAndScroll, resetFields, theme) => {
    this.setState({ reportLoading: true })
    e.preventDefault();
    validateFieldsAndScroll((err, reportForm) => {
      if (!err) {
        console.log('Received values of form: ', reportForm);
        this.toggleReport();
        this.setState({ reportLoading: false });
        openNotification(theme);
        resetFields();
      } else {
        this.setState({ reportLoading: false })
      }
    });
  };

  handleApplySubmit = (e, validateFieldsAndScroll, resetFields) => {
    this.setState({ applyLoading: true })
    e.preventDefault();
    validateFieldsAndScroll((err, applyForm) => {
      if (!err) {
        console.log('Received values of form: ', applyForm);
        setTimeout(() => {
          this.setState({ applyLoading: false });
          this.toggleApply();
          resetFields();
          this.props.history.push('/success')
        }, 1000)

      } else {
        this.setState({ applyLoading: false })
      }
    });
  };

  render() {
    const { showReport, reportLoading, showApply, user, applyLoading } = this.state;
    const { projectDetailAll, theme } = this.props;
    const projectDetail = projectDetailAll.Project[0];
    return (
      <div className="detailheader-container">
        <div className="detailheader-image-container">
          <img className="detailheader-image" src={projectDetail.image} alt={projectDetail.image} />
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
              {projectDetailAll.RoleNeeded.map((role, idx) => idx === 0 ? role.jobtitle : ', ' + role.jobtitle)}
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
  return { fetchGetProfile };
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
      <h3 className={theme + '-text'}>Choose a reason</h3>
      <Form.Item>
        {getFieldDecorator('reason', {
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
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>,
        )}
      </Form.Item>
      <h3 className={theme + '-text'}>A brief explanation</h3>
      <Form.Item>
        {getFieldDecorator('explanation', {
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
