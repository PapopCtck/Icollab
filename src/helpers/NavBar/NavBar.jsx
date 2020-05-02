import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Icon } from 'antd';
import PropTypes from 'prop-types';

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
    const { children, drawer, toggleDrawer, visible, title, theme } = this.props;
    const drawerStyle = {
      dark: {
        backgroundColor: '#001529',
        height: '100vh',
      },
      light: {
        backgroundColor: 'white',
        height: '100vh',
      },
    }
    return (
      <nav className="menu">
        <div className="logo bold">
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
            placement="right"
            className="menuDrawer"
            closable={false}
            onClose={toggleDrawer ? toggleDrawer : this.onClose}
            visible={visible ? visible : this.state.visible}
            bodyStyle={drawerStyle[theme]}
          >
            {drawer}
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default Navbar;

Navbar.propTypes = {
  children: PropTypes.any,
  drawer: PropTypes.any,
  toggleDrawer: PropTypes.func,
  visible: PropTypes.bool,
  title: PropTypes.string,
  theme: PropTypes.string,
}
