import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Form, Input, Icon, Button, Modal } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchLogin } from '../../actions';

import './StyleLogin.css';

const { Title } = Typography;

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      redirect: false,
    }
  }

  
  componentDidUpdate(prevProps) {
    if (prevProps.fetchLogin !== this.props.fetchLogin) {
      const fetchLogin = this.props.fetchLogin;
      this.setState({ fetchLogin });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, loginForm) => {
      if (!err) {
        this.setState({ loading: true });
        console.log('Received values of form: ', loginForm);
        this.props.dispatch(fetchLogin(loginForm)).then((res) => {
          if (res.status === 200) {
            this.setState({ loading: false, redirect: true });
          } else {
            this.modalError();
            this.setState({ loading: false });
          }
        });
      }
    });
  };

  modalError = () => {
    Modal.error({
      title: 'Unexpected Error',
      content: 'Something went wrong. Please try again later',
    });
  }

  render() {
    const { loading, redirect } = this.state;
    const { getFieldDecorator } = this.props.form;
    if (redirect) {
      return (<Redirect to="/" />)
    }
    return (
      <div className="login-content">
        <div className="login-box-container">
          <Title level={2} className="login-title">Login</Title>
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <h4>Email</h4>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your username!',
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
            <Form.Item className="login-password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <div className="login-forgot">
              <Link to="#">
                Forgot password?
              </Link>
            </div>
            <Form.Item className="login-button-container">
              <Button type="primary" htmlType="submit" className="login-button" block loading={loading}>
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div className="login-signup">
            Not account?&nbsp;
            <Link to="/register">
              Create one!
            </Link>
          </div>
        </div>
      </div>

    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);

const mapStateToProps = state => {
  const fetchLogin = state.fetchLogin.data;
  return { fetchLogin };
}

export default connect(mapStateToProps)(WrappedNormalLoginForm)

Login.propTypes = {
  dispatch:PropTypes.func,
  fetchLogin: PropTypes.object,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func,
  }),
}
