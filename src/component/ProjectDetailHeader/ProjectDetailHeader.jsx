import React, { Component } from 'react';
import { Typography, Button, Icon, Modal, Select, Input, Form, notification } from 'antd';
import PropTypes from 'prop-types'

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

export class DetailHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      loading: false,
    };
  }

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
    });
  };


  handleSubmit = (e, validateFieldsAndScroll, theme) => {
    this.setState({ loading: true })
    e.preventDefault();
    validateFieldsAndScroll((err, reportForm) => {
      if (!err) {
        console.log('Received values of form: ', reportForm);
        this.toggleModal();
        this.setState({ loading: false });
        openNotification(theme);
        this.props.form.resetFields();
      } else {
        this.setState({ loading: false })
      }
    });
  };

  render() {
    const { showModal, loading } = this.state;
    const { projectDetail, theme } = this.props;
    return (
      <div className="detailheader-container">
        <div className="detailheader-image-container">
          <img className="detailheader-image" src={projectDetail.image} alt={projectDetail.image} />
        </div>
        <div className="detailheader-content-container">
          <WrappedReportForm showModal={showModal} loading={loading} theme={theme} toggleModal={this.toggleModal} handleSubmit={this.handleSubmit} />
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
              {projectDetail.roleneeded}
              {/* {projectDetail.roleNeeded.map((role, idx) => idx === 0 ? role.title : ', ' + role.title)} */}
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
            <Button className="detailheader-applybtn" type="primary" block>
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
              think this project should be at another level ? <Button className="detailheader-report-button bold" onClick={this.toggleModal} type="link">tell us</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailHeader

DetailHeader.propTypes = {
  projectDetail: PropTypes.object,
  projectId: PropTypes.string,
};


const ReportForm = ({ form: { getFieldDecorator, validateFieldsAndScroll }, showModal, loading, theme, toggleModal, handleSubmit }) => (
  <Modal
    className="detailheader-report-modal"
    visible={showModal}
    onCancel={toggleModal}
    width={400}
    footer={null}
    bodyStyle={theme == 'dark' ? { background: '#29292e' } : { background: 'white' }}
    centered
  >
    <Form className="report-form"
      onSubmit={e => handleSubmit(e, validateFieldsAndScroll ,theme)}
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

export const WrappedReportForm = Form.create({ name: 'report' })(ReportForm);
