import React from 'react';

import './app-body.css';

type ComponentProps = {
  children: React.ReactNode;
};

const AppBody = ({ children }: ComponentProps) => {
  return (
    <main className="app-body">
      {children}
    </main>);
};

export default AppBody;