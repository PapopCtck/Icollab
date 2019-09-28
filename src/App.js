import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Login } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
