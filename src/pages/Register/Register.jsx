import React, { Component } from 'react'
import {
  Typography,
  Form,
  Input,
  Icon,
  Button,
  Checkbox,
  Modal,
} from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLang from '../../AppContext';

import content from './LangRegister';

import { fetchRegister } from '../../actions';

import PropTypes from 'prop-types';

import './StyleRegister.css';
import { getCookie } from '../../helpers';

const { Title } = Typography;

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fetchRegister: null,
      redirect: false,
      errorContent: null,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchRegister !== this.props.fetchRegister) {
      const fetchRegister = this.props.fetchRegister;
      this.setState({ fetchRegister });
    }
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, registerForm) => {
      if (!err) {
        this.setState({ loading: true });
        this.props.dispatch(fetchRegister(registerForm)).then((res) => {
          if (res.status === 200) {
            this.modalSuccess();
            this.setState({ loading: false });
          } else {
            this.setState({ loading: false, errorContent: res.data });
            this.modalError();
          }
        });
      }
    });
  };

  modalSuccess = () => {
    Modal.success({
      content: 'Registration Success!',
      onOk: () => {
        this.setState({ redirect: true });
      },
    });
  }

  modalError = () => {
    const { errorContent } = this.state;
    Modal.error({
      title: 'Unexpected Error',
      content: errorContent ? Object.keys(errorContent)[0] : 'We\'re unable to register for you right now. Please try again later',
    });
  }



  render() {
    const { loading, redirect } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { appLang, appTheme } = this.context;
    if (redirect || getCookie('icollab_token')) {
      return (<Redirect to="/" />)
    }
    return (
      <div className={'register-content ' + appTheme}>
        <div className={'register-box-container ' + appTheme}>
          <Title level={2} className={'register-title ' + appTheme + '-text'}>{content[appLang].title}</Title>
          <Form className="register-form" onSubmit={this.handleSubmit}>
            <h4 className={appTheme + '-text'}>{content[appLang].firstName}</h4>
            <Form.Item>
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your first name!' }],
              })(
                <Input
                  placeholder="First Name"
                />,
              )}
            </Form.Item>
            <h4 className={appTheme + '-text'}>{content[appLang].lastName}</h4>
            <Form.Item>
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please input your last name!' }],
              })(
                <Input
                  placeholder="Last Name"
                />,
              )}
            </Form.Item>
            <h4 className={appTheme + '-text'}>{content[appLang].email}</h4>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                />,
              )}
            </Form.Item>
            <h4 className={appTheme + '-text'}>{content[appLang].password}</h4>
            <Form.Item className="register-password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <h4 className={appTheme + '-text'}>{content[appLang].confirmPassword}</h4>
            <Form.Item className="register-confirmpassword">
              {getFieldDecorator('confirmPassword', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Confirm Password"
                />,
              )}
            </Form.Item>
            <Form.Item className="register-agreement">
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
                rules: [{
                  required: true,
                  message: 'You need to agree in order to register!',
                }],
              })(
                <Checkbox>
                  <span className={'register-checkbox-text ' + appTheme + '-text'}>
                    {content[appLang].agree1} <Link to="#">{content[appLang].tou}</Link> {content[appLang].agree2} <Link to="#">{content[appLang].privacy}</Link>
                  </span>
                </Checkbox>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('newsletter', {
                valuePropName: 'checked',
              })(
                <Checkbox>
                  <span className={'register-checkbox-text ' + appTheme + '-text'}>
                    {content[appLang].newsletter}
                  </span>
                </Checkbox>,
              )}
            </Form.Item>
            <Form.Item className="register-button-container">
              <Button type="primary" htmlType="submit" className="register-button" block loading={loading}>
                {content[appLang].registerBtn}
              </Button>
            </Form.Item>
          </Form>
          <div className="register-login">
            {content[appLang].gotAccount}&nbsp;
            <Link to="/login">
              {content[appLang].login}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Register.contextType = AppLang;

const WrappedRegisterForm = Form.create({ name: 'register' })(Register);

const mapStateToProps = state => {
  const fetchRegister = state.fetchRegister.data;
  return { fetchRegister };
}

export default connect(mapStateToProps)(WrappedRegisterForm);

Register.propTypes = {
  dispatch: PropTypes.func,
  fetchRegister: PropTypes.object,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func,
    getFieldValue: PropTypes.func,
  }),
}
