import React from 'react';

import PageTemplate from '../page-template';

const ReducePage = () => {
  const headerText = 'Let\'s reduce waste!';
  const pageName = 'reduce';

  return (
    <PageTemplate
      headerText={headerText}
      pageName={pageName}
    />
  );
};

export default ReducePage;