import React, { Component } from 'react';

import './app.css';

import AppHeader from '../app-header';
import AppBody from '../app-body';
import HomePage from '../pages/home-page';
import { ReducePage } from '../pages';
import { ReusePage } from '../pages';
import { RecyclePage } from '../pages';
import { LoginPage } from '../pages';
import { SecretPage } from '../pages';
import AppFooter from '../app-footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
        <div className='app'>
          <AppHeader />
          <AppBody>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/reduce/:id?' component={ReducePage} />
              <Route path='/reuse/:id?' component={ReusePage} />
              <Route path='/recycle/:id?' component={RecyclePage} />
              <Route 
                path='/login'
                render={() => { 
                  return <LoginPage 
                            isLoggedIn={isLoggedIn}
                            onLogin={() => {this.onLogin()}} />; }} 
                        />
              <Route 
                path='/secret'
                render={() => { return <SecretPage isLoggedIn={isLoggedIn} />; }} />
              <Route render={() => <h2>Page not found!</h2>} />
            </Switch>
          </AppBody>
          <AppFooter />
        </div>
      </Router>
    );
  }
}

export default App;
