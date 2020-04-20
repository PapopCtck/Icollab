import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Form, Input, Button, Rate } from 'antd';
import PropTypes from 'prop-types';

import { fetchGetProfile } from '../../actions';

import { ThailandStateSelect, getCookie, Loading } from '../../helpers';

import AppContext from '../../AppContext';

import './StyleProfile.css';
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      editing: false,
    };
    if (getCookie('icollab_userinfo')) {
      const id = JSON.parse(getCookie('icollab_userinfo'))[0].user_uid;
      console.log(id)
      props.dispatch(fetchGetProfile({ id },getCookie('icollab_token')));
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

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { user, editing } = this.state;
    const { appTheme } = this.context;
    if (!user) {
      return <div className = { 'main-loading ' + appTheme } > <Loading /></div>
    }
    return (
      <div className="page-wrapper">
        <div className="profile-container">
          <div className="profile-left">
            <Avatar size={128} icon="user" />
            <Rate className="profile-rate" style={{ marginTop: '20px' }} disabled defaultValue={2} />
          </div>
          <div className="profile-right">
            <h3 className={appTheme+'-text'}>Personal Info</h3>
            <Form onSubmit={this.handleSubmit}>
              <h4 className={appTheme+'-text'}>Email</h4>
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
                })(<Input placeholder="Email" disabled={!editing} />)}
              </Form.Item>
              <h4 className={appTheme+'-text'}>First Name</h4>
              <Form.Item>
                {getFieldDecorator('firstName', {
                  initialValue: user.name,
                  rules: [{ required: true, message: 'Please input your first name!' }],
                })(
                  <Input
                    placeholder="First Name"
                    disabled={!editing}
                  />,
                )}
              </Form.Item>
              <h4 className={appTheme+'-text'}>Last Name</h4>
              <Form.Item>
                {getFieldDecorator('lastName', {
                  initialValue: user.lastname,
                  rules: [{ required: true, message: 'Please input your last name!' }],
                })(
                  <Input
                    placeholder="Last Name"
                    disabled={!editing}
                  />,
                )}
              </Form.Item>
              <h4 className={appTheme+'-text'}>City</h4>
              <Form.Item>
                {getFieldDecorator('city', {
                  rules: [{ required: true, message: 'Please select!' }],
                })(
                  <ThailandStateSelect additionalClass="profile-city" disabled={!editing} />,
                )}
              </Form.Item>
              <h3 className={appTheme+'-text'}>Job info</h3>
              <h4 className={appTheme+'-text'}>Current Position</h4>
              <Form.Item>
                {getFieldDecorator('position', {
                  rules: [
                    {
                      required: false,
                    },
                  ],
                })(<Input placeholder="Current Position" disabled={!editing} />)}
              </Form.Item>
              <h4 className={appTheme+'-text'}>Company</h4>
              <Form.Item>
                {getFieldDecorator('company', {
                  rules: [{ required: false }],
                })(
                  <Input placeholder="Company" disabled={!editing} />,
                )}
              </Form.Item>
              <h4 className={appTheme+'-text'}>Skills</h4>
              <Form.Item>
                {getFieldDecorator('skills', {
                  rules: [{ required: false }],
                })(
                  <Input.TextArea
                    placeholder="Skills"
                    rows={4}
                    disabled={!editing}
                  />,
                )}
              </Form.Item>
              <h3 className={appTheme+'-text'}>Contact info</h3>
              <h4 className={appTheme+'-text'}>Phone</h4>
              <Form.Item>
                {getFieldDecorator('phoneNumber', {
                  rules: [{ required: false }],
                })(
                  <Input placeholder="Phone" disabled={!editing} />,
                )}
              </Form.Item>
              <h4 className={appTheme+'-text'}>Website</h4>
              <Form.Item>
                {getFieldDecorator('website', {
                  rules: [{ required: false }],
                })(
                  <Input placeholder="Website" disabled={!editing} />,
                )}
              </Form.Item>
              <Form.Item>
                {editing ?
                  <div>
                    <Button className="profile-edit-button" type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button className="profile-edit-button" type="danger" ghost onClick={this.toggleEdit}>
                      Cancel
                    </Button>
                  </div>
                  :
                  <Button className="profile-edit-button" type="primary" onClick={this.toggleEdit}>
                    Edit
                  </Button>
                }

              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

Profile.contextType = AppContext;

const WrappedProfileForm = Form.create({ name: 'profile' })(Profile);

const mapStateToProps = state => {
  const fetchGetProfile = state.fetchGetProfile.data;
  return { fetchGetProfile };
}

export default connect(mapStateToProps)(WrappedProfileForm);

Profile.propTypes = {
  fetchGetProfile: PropTypes.object,
  dispatch: PropTypes.func,
  form: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}
