import React from 'react';
import { Link } from 'react-router-dom';

import './controls.css';

const Controls = ({ pageName, setHeaderName }) => {
  const controlHeaders = ['What?', 'How?', 'More Information'];
  const controlItems = controlHeaders.map((header) => {
    const headerName = header.toLowerCase().replace('?', '').replace(' ', '-');
    const to = `/${pageName}/${headerName}`;
    
    return (
      <li key={header} className='controls__item'>
        <Link
          to={to} 
          className='controls__link' 
          onClick={(event) => setHeaderName(event,headerName)}
        >
          {header}
        </Link>
      </li>
    );
  });

  return (
    <nav className='controls'>
      <ul className='controls__list'>{controlItems}</ul>
    </nav>
  );
};

export default Controls;