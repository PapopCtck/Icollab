import React, { Component } from 'react';
import { Menu, Icon, Avatar, Modal } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCookie, deleteCookie } from '../../helpers';

import content from './LangNav';

const { SubMenu } = Menu;

class RightNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logout = () => {
    deleteCookie('icollab_token');
    deleteCookie('icollab_refreshtoken');
    deleteCookie('icollab_userinfo');
    this.modalSuccess();
  }

  modalSuccess = () => {
    Modal.success({
      content: 'Success!',
      onOk: () => this.props.history.push('/'),
    });
  }

  render() {
    const { appLang, appTheme } = this.props;
    //if user
    if (getCookie('icollab_token')) {
      const userInfo = JSON.parse(getCookie('icollab_userinfo'));
      //if inline
      if (this.props.mode === 'inline') {
        return (
          <Menu theme={appTheme} mode={this.props.mode} selectable={false} onClick={this.props.onClick}>
            <Menu.Item key="profile">
              <Link to="/profile" className="rightnav-profile">{content[appLang].profile}</Link>
            </Menu.Item>
            <Menu.Item key="trackProject">
              <Link to="/trackproject" className="rightnav-trackproject">{content[appLang].trackProject}</Link>
            </Menu.Item>
            <Menu.Item key="appliedProject">
              <Link to="/appliedproject" className="rightnav-trackproject">{content[appLang].appliedProject}</Link>
            </Menu.Item>
            <Menu.Item key="logout" onClick={this.logout}>
              <span className="rightnav-logout">{content[appLang].logout}</span>
            </Menu.Item>
          </Menu>
        );
      }
      return (
        <Menu theme={appTheme} mode={this.props.mode} selectable={false}>
          <SubMenu
            title={
              <div className="rightnav-title">
                <span className="rightnav-avatar" >
                  <Avatar size="large" src={userInfo[0].image ? userInfo[0].image : null} >{userInfo[0].name.substring(0, 2)}</Avatar>
                </span>
                <Icon type="caret-down" />
              </div>
            }
          >
            <Menu.Item key="profile">
              <Link to="/profile" className="rightnav-profile">{content[appLang].profile}</Link>
            </Menu.Item>
            <Menu.Item key="trackProject">
              <Link to="/trackproject" className="rightnav-trackproject">{content[appLang].trackProject}</Link>
            </Menu.Item>
            <Menu.Item key="appliedProject">
              <Link to="/appliedproject" className="rightnav-trackproject">{content[appLang].appliedProject}</Link>
            </Menu.Item>
            <Menu.Item key="logout" onClick={this.logout}>
              <span to="/" className="rightnav-logout">{content[appLang].logout}</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      )
    }
    //if no user
    return (
      <Menu theme={appTheme} mode={this.props.mode} selectable={false} onClick={this.props.onClick}>
        <Menu.Item key="signup">
          <Link to="/register">{content[appLang].signup}</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">{content[appLang].login}</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(RightNav);

RightNav.propTypes = {
  mode: PropTypes.string,
  appLang: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  onClick: PropTypes.func,
  appTheme: PropTypes.string,
};
