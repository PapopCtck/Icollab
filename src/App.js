import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import AppContext from './AppContext';

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
  LearnMore,
  Success,
} from './pages';

import './App.css';

import { MainNav, MainFooter } from './component';

import { ProtectedRoute } from './helpers';

const { Header, Content, Footer } = Layout;

function App() {

  const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
    const [value, setValue] = useState(
      localStorage.getItem(localStorageKey) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
    return [value, setValue];
  };


  const [appLang, setLang] = useStateWithLocalStorage(
    'appLang', 'en'
  );

  const [appTheme, setTheme] = useStateWithLocalStorage(
    'appTheme', 'dark'
  );

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Switch>
          <Route sensitive strict exact path="/createproject" component={null} />
          <Header className={'header-container ' + appTheme}>
            <Route sensitive strict exact render={() => <MainNav appLang={appLang} setLang={setLang} appTheme={appTheme} setTheme={setTheme} />} />
          </Header>
        </Switch>
        <Layout>
          <AppContext.Provider value={{ appLang, appTheme }}>
            <Content className={appTheme}>
              <Switch>
                <Route sensitive strict exact path="/" component={Main} />
                <Route sensitive strict path="/login" component={Login} />
                <Route sensitive strict path="/register" component={Register} />
                <Route sensitive strict path="/project/:id" component={ProjectDetail} />
                <Route sensitive strict path="/explore" component={Explore} />
                <Route sensitive strict path="/profile" component={Profile} />
                <Route sensitive strict path="/createproject" render={() => <CreateProject setLang={setLang} setTheme={setTheme}/>} />
                <Route sensitive strict path="/trackproject" component={TrackProject} />
                <Route sensitive strict path="/learnmore" component={LearnMore} />
                <ProtectedRoute sensitive strict path="/success" component={Success} />
                <Route sensitive strict path="/403" component={Error403} />
                <Route sensitive strict path="/500" component={Error500} />
                <Route sensitive strict component={Error404} />
              </Switch>
            </Content>
          </AppContext.Provider>
        </Layout>
        <Switch>
          <Route sensitive strict exact path="/createproject" component={null} />
          <Footer className={appTheme}>
            <Route sensitive strict exact component={MainFooter} />
          </Footer>
        </Switch>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
