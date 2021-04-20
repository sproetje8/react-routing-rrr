import React from 'react';

import './app-header.css';

import Navbar from '../navbar';
import Home from '../home';
import Authorization from '../authorization';

const AppHeader = (): JSX.Element => {
  return (
    <div className="app-header">
      <Navbar />
      <Home />
      <Authorization />
    </div>
  )
};

export default AppHeader;