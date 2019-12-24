import React, { useState } from 'react';
import { Layout } from 'antd';

import { MainNav, MainFooter } from '../../component';

const { Header, Content, Footer } = Layout;

export function TabsBar(props) {
  const [activeTab, setActive] = useState(0);
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
          <MainNav />
        </Header>
        <Content className="tab-content-content">
          {props.children.map((child, index) => {
            const isActiveTab = (activeTab === index);
            const children = child.props.children;

            return React.createElement(TabContent, { isActiveTab }, children)
          })}
        </Content>
        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export const Tab = ({ isActiveTab, onTabClick, label }) => (
  <li className={`tab ${isActiveTab ? 'is-active bold' : ''}`} onClick={onTabClick}>
    {label}
  </li>
)

export const TabContent = ({ children, isActiveTab }) => (
  <div className={`tab-content ${isActiveTab ? 'is-active' : ''}`}>{children}</div>
)
