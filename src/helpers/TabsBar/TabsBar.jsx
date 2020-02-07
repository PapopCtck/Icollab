import React, { useState, useContext } from 'react';
import { Layout, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MainNav, MainFooter } from '../../component';

import AppLang from '../../AppContext';

import './StyleTabsBar.css';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

export function TabsBar(props) {
  const [activeTab, setActive] = useState(0);
  const tabLength = props.children.length;
  const appLang = useContext(AppLang);
  return (
    <div className="tab-container">
      <ul className="tab-ul">
        {props.children.map((child, index) => {
          const onTabClick = () => setActive(index);
          const isActiveTab = (activeTab === index);
          return React.cloneElement(child, { onTabClick, isActiveTab })
        })}
      </ul>
      <Layout className="tab-content-container">
        <Header className="header-container">
          <MainNav appLang={appLang} setLang={props.setLang} />
        </Header>
        <Content className="tab-content-content">
          {props.children.map((child, index) => {
            const isActiveTab = (activeTab === index);
            const { children, header } = child.props;
            const onNext = () => activeTab + 1 >= tabLength ? null : setActive(activeTab + 1)
            const onPrev = () => activeTab - 1 < 0 ? null : setActive(activeTab - 1)
            const { onFinish } = props;
            return React.createElement(TabContent, { isActiveTab, onNext, onPrev, activeTab, tabLength, onFinish, header }, children)
          })}
        </Content>
        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    </div>
  );
}

TabsBar.propTypes = {
  children: PropTypes.array,
  setLang: PropTypes.func,
}

export const Tab = ({ isActiveTab, onTabClick, label }) => (
  <li className={`tab ${isActiveTab ? 'is-active bold' : ''}`} onClick={onTabClick}>
    {label}
  </li>
);

Tab.propTypes = {
  isActiveTab: PropTypes.bool,
  onTabClick: PropTypes.func,
  label: PropTypes.string,
}

export const TabContent = ({ children, isActiveTab, onNext, onPrev, activeTab, tabLength, onFinish, header }) => (
  <div className={`tab-content ${isActiveTab ? 'is-active' : ''}`}>
    <div className="tab-content-header">
      <Title level={3} className="create-title tab-content-header-title">{header}</Title>
      <div className="tab-content-header-button-container">
        <Button className="tab-content-button" type="link"><Link to="/">Save your project</Link></Button>
        <Button className="tab-content-button" type="primary" ><Link to="/">Publish</Link></Button>
      </div>
    </div>
    <div className="tab-content-child-container">
      {children}
      <div className="tab-content-button-container">
        {
          activeTab + 1 === tabLength ?
            <Button className="tab-content-button" type="primary" onClick={onFinish}>Publish</Button>
            : <Button className="tab-content-button" type="primary" onClick={onNext}>Next</Button>
        }
        {
          activeTab === 0 ?
            <Button className="tab-content-button" ><Link to="/">Cancel</Link></Button>
            : <Button className="tab-content-button" onClick={onPrev}>Prev</Button>
        }
      </div>
    </div>
  </div>
)

TabContent.propTypes = {
  children: PropTypes.any,
  isActiveTab: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  activeTab: PropTypes.number,
  tabLength: PropTypes.number,
  onFinish: PropTypes.func,
  header: PropTypes.string,
}
