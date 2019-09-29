import React, { Component } from 'react';
import { Layout, Typography, Form, Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

import { MainNav, MainFooter } from '../../component';

import './StyleLogin.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="layout">
        <Header className="header-container">
          <MainNav />
        </Header>
        <Layout>
          <Sider className="sider" />
          <Content className="login-content">
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
                  <Button type="primary" htmlType="submit" className="login-button" block>
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
          </Content>
          <Sider className="sider" />
        </Layout>
        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);

export default WrappedNormalLoginForm
