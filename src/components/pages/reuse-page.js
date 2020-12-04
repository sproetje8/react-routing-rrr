import React from 'react';

import PageHeader from '../page-header';
import Controls from '../controls';
import withHeaderName from '../hoc-helpers/withHeaderName';

const ReusePage = () => {
  const headerText = 'Let\'s reuse waste!';
  const pageName = 'reuse';

  return (
    <>
      <PageHeader headerText={headerText} />
      <Controls pageName={pageName} />
    </>
  );
};

export default withHeaderName(ReusePage);