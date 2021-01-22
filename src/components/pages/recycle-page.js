import React from 'react';
import { withRouter } from 'react-router-dom';

import PageHeader from '../page-header';
import Controls from '../controls';
import Text from '../text';
import withHeaderName from '../hoc-helpers/withHeaderName';

const RecyclePage = ({ match }) => {
  const headerText = 'Let\'s recycle waste!';
  const pageName = 'recycle';
  const { id } = match.params;

  return (
    <>
      <PageHeader headerText={headerText} />
      <Controls pageName={pageName} />
      <Text pageName={pageName} controlHeader={id} />
    </>
  );
};

export default withRouter(withHeaderName(RecyclePage));