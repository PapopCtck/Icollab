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
  const { appLang, appTheme } = useContext(AppLang);
  return (
    <div className="tab-container">
      <ul className={'tab-ul ' + appTheme}>
        {props.children.map((child, index) => {
          const onTabClick = () => setActive(index);
          const isActiveTab = (activeTab === index);
          return React.cloneElement(child, { onTabClick, isActiveTab, appTheme })
        })}
      </ul>
      <Layout className="tab-content-container">
        <Header className={'header-container ' + appTheme}>
          <MainNav appTheme={appTheme} appLang={appLang} setLang={props.setLang} setTheme={props.setTheme} />
        </Header>
        <Content className={'tab-content-content ' + appTheme}>
          {props.children.map((child, index) => {
            const isActiveTab = (activeTab === index);
            const { children, header } = child.props;
            const onNext = () => activeTab + 1 >= tabLength ? null : setActive(activeTab + 1)
            const onPrev = () => activeTab - 1 < 0 ? null : setActive(activeTab - 1)
            const { onFinish, content, onSave, loading } = props;
            return React.createElement(TabContent, { isActiveTab, onNext, onPrev, activeTab, tabLength, onFinish, header, content, appTheme, onSave, loading }, children)
          })}
        </Content>
        <Footer className={appTheme}>
          <MainFooter />
        </Footer>
      </Layout>
    </div>
  );
}

TabsBar.propTypes = {
  children: PropTypes.array,
  setLang: PropTypes.func,
  setTheme: PropTypes.func,
}

export const Tab = ({ isActiveTab, onTabClick, label, appTheme }) => (
  <li className={`tab ${isActiveTab ? 'is-active bold' : ''} ${appTheme}`} onClick={onTabClick}>
    {label}
  </li>
);

Tab.propTypes = {
  isActiveTab: PropTypes.bool,
  onTabClick: PropTypes.func,
  label: PropTypes.string,
  appTheme: PropTypes.string,
}

export const TabContent = ({ children, isActiveTab, onNext, onPrev, activeTab, tabLength, onFinish, header, content, appTheme, onSave, loading }) => (
  <div className={`tab-content ${isActiveTab ? 'is-active' : ''} ${appTheme}`}>
    <div className={'tab-content-header ' + appTheme}>
      <Title level={3} className={'create-title tab-content-header-title ' + appTheme + '-text'}>{header}</Title>
      <div className="tab-content-header-button-container">
        <Button className="tab-content-button" type="link" onClick={onSave} disabled>{content.saveProject}</Button>
        <Button className="tab-content-button" type="primary" onClick={onFinish} loading={loading}>{content.publish}</Button>
      </div>
    </div>
    <div className="tab-content-child-container">
      {children}
      <div className="tab-content-button-container">
        {
          activeTab + 1 === tabLength ?
            <Button className="tab-content-button" type="primary" onClick={onFinish} loading={loading}>{content.publish}</Button>
            : <Button className="tab-content-button" type="primary" onClick={onNext}>{content.next}</Button>
        }
        {
          activeTab === 0 ?
            <Button className="tab-content-button" ><Link to="/">{content.cancel}</Link></Button>
            : <Button className="tab-content-button" onClick={onPrev}>{content.prev}</Button>
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
  content: PropTypes.object,
  appTheme: PropTypes.string, 
  onSave: PropTypes.func, 
  loading: PropTypes.bool,
}
