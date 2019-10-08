import React, { Component } from 'react';

import { NavBar } from '../../helpers';

import RightNav from './RightNav';
import LeftNav from './LeftNav';

export class MainNav extends Component {

  renderRightDrawer = () => <div><LeftNav mode="inline" /> <RightNav mode="inline" /></div>
  render() {
    return (
      <NavBar drawer={this.renderRightDrawer()}>
        <div className="menuRigth">
          <RightNav mode="horizontal" />
        </div>
        <div className="vertical-line"></div>
        <div className="menuLeft">
          <LeftNav mode="horizontal" />
        </div>

      </NavBar>
    )
  }
}

export default MainNav;
