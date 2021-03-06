import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Form, Input, Icon, Button, Modal } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppLang from '../../AppContext';

import { getCookie } from '../../helpers';
import { fetchLogin } from '../../actions';

import content from './LangLogin';
import './StyleLogin.css';

const { Title } = Typography;

export class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, loginForm) => {
      if (!err) {
        this.setState({ loading: true });
        this.props.dispatch(fetchLogin(loginForm)).then((res) => {
          if (res.status !== 200) {
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
    const { loading } = this.state;
    const { appLang, appTheme } = this.context;
    const { getFieldDecorator } = this.props.form;
    if (getCookie('icollab_token')) {
      return (<Redirect to="/" />)
    }
    return (
      <div className={'login-content ' + appTheme }>
        <div className={'login-box-container ' + appTheme}>
          <Title level={2} className={'login-title ' + appTheme + '-text'}>{content[appLang].title}</Title>
          <Form className="login-form" onSubmit={this.handleSubmit}>
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
            <h4 className={appTheme + '-text'} >{content[appLang].password}</h4>
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
                {content[appLang].forgotPassword}
              </Link>
            </div>
            <Form.Item className="login-button-container">
              <Button type="primary" htmlType="submit" className="login-button" block loading={loading}>
                {content[appLang].loginBtn}
              </Button>
            </Form.Item>
          </Form>
          <div className="login-signup">
            {content[appLang].noAccount}&nbsp;
            <Link to="/register">
              {content[appLang].create}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Login.contextType = AppLang;

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);

const mapStateToProps = state => {
  const fetchLogin = state.fetchLogin.data;
  return { fetchLogin };
}

export default connect(mapStateToProps)(WrappedNormalLoginForm)

Login.propTypes = {
  dispatch: PropTypes.func,
  fetchLogin: PropTypes.object,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func,
  }),
}
