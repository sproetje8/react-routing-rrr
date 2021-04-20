import React from 'react';
import { EPageName } from '../../enums';

import PageTemplate from '../page-template';

const ReducePage = () => {
  const headerText = 'Let\'s reduce waste!';
  const pageName: EPageName = EPageName.REDUCE;

  return (
    <PageTemplate
      headerText={headerText}
      pageName={pageName}
    />
  );
};

export default ReducePage;