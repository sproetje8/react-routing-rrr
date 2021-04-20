import React from 'react';
import { Redirect } from 'react-router-dom';

interface SecretPageProps {
  isLoggedIn: boolean;
}

const SecretPage = ({isLoggedIn}: SecretPageProps) => {
  const secrets = (
    <div>
      <h3>Here are lots of secrets!!!</h3>
    </div>
  );

  const redirect = (<Redirect to='/login' />);

  return isLoggedIn ? secrets : redirect;
};

export default SecretPage;