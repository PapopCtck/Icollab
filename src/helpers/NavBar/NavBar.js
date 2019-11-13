import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Icon } from 'antd';

import './StyleNavBar.css'

class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false,
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  render() {
    const { children, drawer } = this.props;
    return (
      <nav className="menu">
        <div className="logo">
          <Link to="/">Icollab</Link>
        </div>
        <div className="menuContainer">
          {children}
          <Button
            className="menuMobile-button"
            type="primary"
            onClick={this.showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menuDrawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            {drawer}
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default Navbar;
