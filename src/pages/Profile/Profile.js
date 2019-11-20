import React, { Component } from 'react';
import { Avatar, Form, Input, Button } from 'antd';

import { ThailandStateSelect } from '../../helpers';

import './StyleProfile.css';
export class Profile extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, profile) => {
      if (!err) {
        console.log('Received values of form: ', profile);
      }
    })
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="page-wrapper">
        <div className="profile-container">
          <div className="profile-left">
            <Avatar size={128} icon="user" />
          </div>
          <div className="profile-right">
            <h3>Personal Info</h3>
            <Form onSubmit={this.handleSubmit}>
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
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(<Input placeholder="Email" disabled />)}
              </Form.Item>
              <h4>First Name</h4>
              <Form.Item>
                {getFieldDecorator('firstName', {
                  rules: [{ required: true, message: 'Please input your first name!' }],
                })(
                  <Input
                    placeholder="First Name"
                    disabled
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
                    disabled
                  />,
                )}
              </Form.Item>
              <h4>City</h4>
              <Form.Item>
                {getFieldDecorator('city', {
                  rules: [{ required: true, message: 'Please select!' }],
                })(
                  <ThailandStateSelect additionalClass="profile-city" disabled />,
                )}
              </Form.Item>
              <h3>Job info</h3>
              <h4>Current Position</h4>
              <Form.Item>
                {getFieldDecorator('position', {
                  rules: [
                    {
                      required: false,
                    },
                  ],
                })(<Input placeholder="Current Position" disabled />)}
              </Form.Item>
              <h4>Company</h4>
              <Form.Item>
                {getFieldDecorator('company', {
                  rules: [{ required: false }],
                })(
                  <Input placeholder="Company" disabled />,
                )}
              </Form.Item>
              <h4>Skills</h4>
              <Form.Item>
                {getFieldDecorator('skills', {
                  rules: [{ required: false }],
                })(
                  <Input.TextArea
                    placeholder="Skills"
                    rows={4}
                    disabled
                  />,
                )}
              </Form.Item>
              <h3>Contact info</h3>
              <h4>Phone</h4>
              <Form.Item>
                {getFieldDecorator('phoneNumber', {
                  rules: [{ required: false }],
                })(
                  <Input placeholder="Phone" disabled />,
                )}
              </Form.Item>
              <h4>Website</h4>
              <Form.Item>
                {getFieldDecorator('website', {
                  rules: [{ required: false }],
                })(
                  <Input placeholder="Website" disabled />,
                )}
              </Form.Item>
              <Form.Item>
                <Button className="profile-edit-button" type="primary" htmlType="submit">
                  Edit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const WrappedProfileForm = Form.create({ name: 'profile' })(Profile);

export default WrappedProfileForm;
