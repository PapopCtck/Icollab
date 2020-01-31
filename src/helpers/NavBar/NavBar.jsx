import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Icon } from 'antd';

import './StyleNavBar.css'

class Navbar extends Component {
  state = {
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
    const { children, drawer, toggleDrawer, visible, title } = this.props;
    return (
      <nav className="menu">
        <div className="logo">
          <Link to="/">{title}</Link>
        </div>
        <div className="menuContainer">
          {children}
          <Button
            className="menuMobile-button"
            type="primary"
            onClick={toggleDrawer ? toggleDrawer : this.showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            className="menuDrawer"
            closable={false}
            onClose={toggleDrawer ? toggleDrawer : this.onClose}
            visible={visible ? visible : this.state.visible}
          >
            {drawer}
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default Navbar;
