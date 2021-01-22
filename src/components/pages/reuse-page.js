import React from 'react';

import PageTemplate from '../page-template';

const ReusePage = () => {
  const headerText = 'Let\'s reuse waste!';
  const pageName = 'reuse';
  
  return (
    <PageTemplate
      headerText={headerText}
      pageName={pageName}
    />
  );
};

export default ReusePage;