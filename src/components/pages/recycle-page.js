import React from 'react';

import PageTemplate from '../page-template';

const RecyclePage = () => {
  const headerText = 'Let\'s recycle waste!';
  const pageName = 'recycle';

  return (
    <PageTemplate
      headerText={headerText}
      pageName={pageName}
    />
  );
};

export default RecyclePage;