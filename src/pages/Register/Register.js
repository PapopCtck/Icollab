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
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRegister } from '../../actions';

import './StyleRegister.css';

const { Title } = Typography;

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
        console.log('Received values of form: ', registerForm);
        this.props.dispatch(fetchRegister(registerForm)).then((res) => {
          if (res.status === 200) {
            this.modalSuccess();
            this.setState({ loading: false });
          } else {
            this.modalError();
            this.setState({ loading: false });
          }
        });
      }
    });
  };

  modalSuccess = () => {
    Modal.success({
      content: 'Registration Success!',
    });
  }

  modalError = () => {
    Modal.error({
      title: 'Unexpected Error',
      content: 'We\'re unable to register for you right now.Please try again later',
    });
  }



  render() {
    const { loading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="register-content">
        <div className="register-box-container">
          <Title level={2} className="register-title">Register</Title>
          <Form className="register-form" onSubmit={this.handleSubmit}>
            <h4>First Name</h4>
            <Form.Item>
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your first name!' }],
              })(
                <Input
                  placeholder="First Name"
                />,
              )}
            </Form.Item>
            <h4>Last Name</h4>
            <Form.Item>
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please input your last name!' }],
              })(
                <Input
                  placeholder="Last Name"
                />,
              )}
            </Form.Item>
            <h4>Email</h4>
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
            <h4>Password</h4>
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
            <h4>Confirm Password</h4>
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
                  <span className="register-checkbox-text">
                    I agree to the <Link to="#">Terms of Use</Link> and have read and understand the <Link to="#">Privacy Policy</Link>
                  </span>
                </Checkbox>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('newsletter', {
                valuePropName: 'checked',
              })(
                <Checkbox>
                  <span className="register-checkbox-text">
                    Sign me up for the newsletter
                  </span>
                </Checkbox>,
              )}
            </Form.Item>
            <Form.Item className="register-button-container">
              <Button type="primary" htmlType="submit" className="register-button" block loading={loading}>
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="register-login">
            Have an account?&nbsp;
            <Link to="/login">
              Login now!
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const WrappedRegisterForm = Form.create({ name: 'register' })(Register);

const mapStateToProps = state => {
  const fetchRegister = state.fetchRegister.data;
  return { fetchRegister };
}
export default connect(mapStateToProps)(WrappedRegisterForm);
