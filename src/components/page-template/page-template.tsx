import React from 'react';
import { withRouter, match } from 'react-router-dom';

import PageHeader from '../page-header';
import Controls from '../controls';
import Text from '../text';

type PageTemplateProps = {
  match: match;
  headerText: string;
  pageName: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ match, headerText: header, pageName: pageType }) => {
  const headerText = header;
  const pageName = pageType;
  const { id } = match.params;

  return (
    <>
      <PageHeader headerText={headerText} />
      <Controls pageName={pageName} />
      <Text pageName={pageName} controlHeader={id} />
    </>
  );
};

export default withRouter(PageTemplate);