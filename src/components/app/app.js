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
import Text from '../text';
import AppFooter from '../app-footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
            <Route 
              path='/'          
              exact
              render={() => <HomePage />} />
            <Route path='/reduce/:id?' component={ReducePage} />
            <Route path='/reuse' component={ReusePage} />
            <Route path='/reuse/:id'
              render={({match}) => {
                const { id } = match.params;
                return <Text pageName='reuse' controlHeader={id} />;
              }} />
            <Route path='/recycle' component={RecyclePage} />
            <Route path='/recycle/:id'
              render={({match}) => {
                const { id } = match.params;
                return <Text pageName='recycle' controlHeader={id} />;
              }} />
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
          </AppBody>
          <AppFooter />
        </div>
      </Router>
    );
  }
}

export default App;
