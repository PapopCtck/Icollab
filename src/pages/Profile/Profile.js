import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Form, Input, Button } from 'antd';

import { fetchGetProfile } from '../../actions';

import { ThailandStateSelect, getCookie, Loading } from '../../helpers';

import './StyleProfile.css';
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    if (getCookie('icollab_userinfo')) {
      const id = JSON.parse(getCookie('icollab_userinfo'))[0].user_uid;
      console.log(id)
      props.dispatch(fetchGetProfile({ id }));
    } else {
      props.history.push('/');
    }

  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchGetProfile !== this.props.fetchGetProfile) {
      const fetchGetProfile = this.props.fetchGetProfile;
      this.setState({ user: fetchGetProfile.User[0] }, () => console.log(this.state));
    }
  }

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
    const { user } = this.state;
    if (!user) {
      return <Loading />
    }
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
                  initialValue: user.email,
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
                })(<Input placeholder="Email" disabled/>)}
              </Form.Item>
              <h4>First Name</h4>
              <Form.Item>
                {getFieldDecorator('firstName', {
                  initialValue: user.name,
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
                  initialValue: user.lastname,
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
                <Button className="profile-edit-button" type="primary">
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

const mapStateToProps = state => {
  const fetchGetProfile = state.fetchGetProfile.data;
  return { fetchGetProfile };
}

export default connect(mapStateToProps)(WrappedProfileForm);
