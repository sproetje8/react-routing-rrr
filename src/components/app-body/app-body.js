import React from 'react';

import './app-body.css';

const AppBody = (props) => {
  return (
    <main className="app-body">
      {props.children}
    </main>);
};

export default AppBody;