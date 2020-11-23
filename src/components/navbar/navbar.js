import React from 'react';

import './navbar.css';

const Navbar = () => {
  const itemNames = ['reduce', 'reuse', 'recycle'];

  const items = itemNames.map((itemName) => {
    const link = `/${itemName}`;
    const label = itemName[0].toUpperCase() + itemName.slice(1);

    return (
    <li className="navbar__item" key={itemName}>
        <a className="navbar__link" href={link}>{label}</a>
      </li>
    )
  });
  return (
    <ul className="navbar">
      {items}
    </ul>
  );
};

export default Navbar;