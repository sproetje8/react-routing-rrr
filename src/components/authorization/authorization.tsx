import React from 'react';
import { Link } from 'react-router-dom';

import './authorization.css';

const Authorization = (): JSX.Element => {
  return (
    <div className="authorization">
      <Link className="authorization__link" to="/login">
        Login
      </Link>
      <Link className="authorization__link" to="/secret">
        Secret
      </Link>
    </div>
  )
};

export default Authorization;