import React from 'react';

import './page-header.css';

const PageHeader = ({ headerText }) => {
  return (
    <h3 className='page-header'>{headerText}</h3>
  );
};

export default PageHeader;