import React from 'react';
import { Redirect } from 'react-router-dom';

interface LoginPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const LoginPage = ({ isLoggedIn, onLogin }: LoginPageProps) => {

  if (isLoggedIn) {
    return <Redirect to='/' />
  }
  
  return (
    <div className="login">
      <p>Login to see the secret page!</p>
      <button
        className="btn login__btn"
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;