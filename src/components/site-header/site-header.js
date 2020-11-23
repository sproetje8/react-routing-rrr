import React from 'react';

import './site-header.css';

import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const SiteHeader = () => {
  return (
    <>
      <Navbar />
      <h1 className="site-header">at&nbsp;
        <Link className="site-header__link" to="/">
          Home
        </Link>
      </h1>
    </>
  )
};

export default SiteHeader;