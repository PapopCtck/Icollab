import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import {
  Main,
  Login,
  Register,
  ProjectDetail,
  Error403,
  Error500,
  Error404,
} from './pages';

import './App.css';
import { MainNav, MainFooter } from './component';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header-container">
          <Route sensitive strict exact component={MainNav} />
        </Header>
        <Layout>
          <Content >
            <Switch>
              <Route sensitive strict exact path="/" component={Main} />
              <Route sensitive strict path="/login" component={Login} />
              <Route sensitive strict path="/register" component={Register} />
              <Route sensitive strict path="/project/:id" component={ProjectDetail} />
              <Route sensitive strict path="/403" component={Error403} />
              <Route sensitive strict path="/500" component={Error500} />
              <Route sensitive strict component={Error404} />
            </Switch>
          </Content>
        </Layout>
        <Footer>
          <Route sensitive strict exact component={MainFooter} />
        </Footer>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
