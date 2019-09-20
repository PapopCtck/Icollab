import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
