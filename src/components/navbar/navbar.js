import React from 'react';

import './navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <ul className="navbar">
      <li className="navbar__item" key="reduce">
        <Link className="navbar__link" to="/reduce">Reduce</Link>
      </li>
      <li className="navbar__item" key="reuse">
        <Link className="navbar__link" to="/reuse">Reuse</Link>
      </li>
      <li className="navbar__item" key="recycle">
        <Link className="navbar__link" to="/recycle">Recycle</Link>
      </li>
    </ul>
  );
};

export default Navbar;