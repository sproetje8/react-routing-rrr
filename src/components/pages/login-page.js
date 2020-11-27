import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin }) => {
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