import React, { Component } from 'react';
import { Menu, Icon, Avatar } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCookie, deleteCookie } from '../../helpers';

const { SubMenu } = Menu;

class RightNav extends Component {
  render() {
    if (getCookie('icollab_token')) {
      if (this.props.mode === 'inline') {
        return (
          <Menu mode={this.props.mode} selectable={false}>
            <Menu.Item key="profile">
              <Link to="/profile" className="rightnav-profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Link to="/" className="rightnav-logout" onClick={() => deleteCookie('icollab_token')}>Logout</Link>
            </Menu.Item>
          </Menu>
        );
      }
      return (
        <Menu mode={this.props.mode} selectable={false}>
          <SubMenu
            title={
              <div className="rightnav-title">
                <span className="rightnav-avatar" >
                  <Avatar size="large" icon="user" onClick={() => this.props.history.push('/profile')}/>
                </span>
                <Icon type="caret-down" />
              </div>
            }
          >
            <Menu.Item key="logout">
              <Link to="/" className="rightnav-logout" onClick={() => deleteCookie('icollab_token')}>Logout</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      )
    }
    return (
      <Menu mode={this.props.mode} selectable={false}>
        <Menu.Item key="signup">
          <Link to="/register">Signup</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(RightNav);

RightNav.propTypes = {
  mode: PropTypes.string,
};
