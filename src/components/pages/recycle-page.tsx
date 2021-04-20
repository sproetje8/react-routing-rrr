import React from 'react';
import { EPageName } from '../../enums';

import PageTemplate from '../page-template';

const RecyclePage = () => {
  const headerText = `Let's recycle waste!`;
  const pageName: EPageName = EPageName.RECYCLE;

  return (
    <PageTemplate
      headerText={headerText}
      pageName={pageName}
    />
  );
};

export default RecyclePage;