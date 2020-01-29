import React, { Component } from 'react';

import { NavBar } from '../../helpers';

import RightNav from './RightNav';
import LeftNav from './LeftNav';

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
  renderRightDrawer = () => <div><LeftNav onClick={this.toggleDrawer} mode="inline" {...this.props} /> <RightNav onClick={this.toggleDrawer} mode="inline" /></div>
  render() {
    return (
      <NavBar visible={this.state.drawerVisible} toggleDrawer={this.toggleDrawer} drawer={this.renderRightDrawer()}>
        <div className="menuRigth">
          <RightNav mode="horizontal" />
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
