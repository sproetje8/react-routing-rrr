import React from 'react';
import { withRouter } from 'react-router-dom';

import './controls.css';
import data from '../../data';

const Controls = ({ pageName, history }) => {
  const controlHeaders = Object.keys(data[pageName]);
  
  const controlItems = controlHeaders.map((header) => {
    const controlHeader = header.toLowerCase().replace('?', '').replace(' ', '-');
        
    return (
      <li 
        key={header}
        className='controls__item'
        onClick={() => {
          history.push(`/${pageName}/${controlHeader}`)
        }}
      >
        {header}
      </li>
    );
    });

  return (
    <nav className='controls'>
      <ul className='controls__list'>{controlItems}</ul>
    </nav>
  );
};

export default withRouter(Controls);