import React from 'react';

import PageHeader from '../page-header';
import Controls from '../controls';
import withHeaderName from '../hoc-helpers/withHeaderName';

const ReducePage = () => {
  const headerText = 'Let\'s reduce waste!';
  const pageName = 'reduce';

  return (
    <>
      <PageHeader headerText={headerText} />
      <Controls pageName={pageName} />
    </>
  );
};

export default withHeaderName(ReducePage);