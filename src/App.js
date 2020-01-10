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
  Explore,
  Profile,
  CreateProject,
  TrackProject,
} from './pages';

import './App.css';
import { MainNav, MainFooter } from './component';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Switch>
          <Route sensitive strict exact path="/createproject" component={null} />
          <Header className="header-container">
            <Route sensitive strict exact component={MainNav} />
          </Header>
        </Switch>
        <Layout>
          <Content >
            <Switch>
              <Route sensitive strict exact path="/" component={Main} />
              <Route sensitive strict path="/login" component={Login} />
              <Route sensitive strict path="/register" component={Register} />
              <Route sensitive strict path="/project/:id" component={ProjectDetail} />
              <Route sensitive strict path="/explore" component={Explore} />
              <Route sensitive strict path="/profile" component={Profile} />
              <Route sensitive strict path="/createproject" component={CreateProject} />
              <Route sensitive strict path="/trackproject" component={TrackProject} />
              <Route sensitive strict path="/403" component={Error403} />
              <Route sensitive strict path="/500" component={Error500} />
              <Route sensitive strict component={Error404} />
            </Switch>
          </Content>
        </Layout>
        <Switch>
          <Route sensitive strict exact path="/createproject" component={null} />
          <Footer>
            <Route sensitive strict exact component={MainFooter} />
          </Footer>
        </Switch>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
