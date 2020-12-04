import React from 'react';

import PageHeader from '../page-header';
import Controls from '../controls';
import withHeaderName from '../hoc-helpers/withHeaderName';

const RecyclePage = () => {
  const headerText = 'Let\'s recycle waste!';
  const pageName = 'recycle';

  return (
    <>
      <PageHeader headerText={headerText} />
      <Controls pageName={pageName} />
    </>
  );
};

export default withHeaderName(RecyclePage);