import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavBar } from '../../helpers';

import RightNav from './RightNav';
import LeftNav from './LeftNav';

import content from './LangNav';

export class MainNav extends Component {
  state = {
    drawerVisible: false,
  }
  toggleDrawer = () => {
    const { drawerVisible } = this.state;
    this.setState({
      drawerVisible: !drawerVisible,
    })
  }
  renderRightDrawer = () => <div><LeftNav onClick={this.toggleDrawer} mode="inline" {...this.props} /> <RightNav onClick={this.toggleDrawer} mode="inline" {...this.props}/></div>
  render() {
    const { appLang } = this.props;
    return (
      <NavBar theme={this.props.appTheme} title={content[appLang].title} visible={this.state.drawerVisible} toggleDrawer={this.toggleDrawer} drawer={this.renderRightDrawer()}>
        <div className="menuRigth">
          <RightNav mode="horizontal" {...this.props} />
        </div>
        <div className="vertical-line"></div>
        <div className="menuLeft">
          <LeftNav mode="horizontal" {...this.props}/>
        </div>

      </NavBar>
    )
  }
}

export default MainNav;

MainNav.propTypes = {
  appLang: PropTypes.string,
  appTheme: PropTypes.string,
}
