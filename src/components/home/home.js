import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {
  return (
    <div className="home">
      &#64;&nbsp;
      <Link className="home__link" to="/">
        <i class="fa fa-home"></i>
      </Link>
    </div>
  );
};

export default Home;