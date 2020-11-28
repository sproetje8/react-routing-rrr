import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import AppBody from '../app-body';
import ReducePage from '../reduce-page';
import ReusePage from '../reuse-page';
import RecyclePage from '../recycle-page';
import AppFooter from '../app-footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <AppBody>
          <Route
            path="/"          
            exact
            render={() => <h2 className="app-body__header">Welcome to Evelien's RRR site.</h2>} />
          <Route path="/reduce" component={ReducePage} />
          <Route path="/reuse" component={ReusePage} />
          <Route path="/recycle" component={RecyclePage} />
        </AppBody>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
