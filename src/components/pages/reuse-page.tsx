import React from 'react';
import { EPageName } from '../../enums';

import PageTemplate from '../page-template';

const ReusePage = () => {
  const headerText = 'Let\'s reuse waste!';
  const pageName = EPageName.REUSE;
  
  return (
    <PageTemplate
      headerText={headerText}
      pageName={pageName}
    />
  );
};

export default ReusePage;