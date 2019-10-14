import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Main,
  Login,
  Register,
  ProjectDetail,
} from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/project/:id" component={ProjectDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
