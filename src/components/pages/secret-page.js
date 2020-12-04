import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return (
      <div>
        <h3>Here are lots of secrets!!!</h3>
      </div>
    );
  }

  return (<Redirect to='/login' />);
};

export default SecretPage;