import React from 'react';
import { withRouter, RouteComponentProps, match } from 'react-router-dom';

import PageHeader from '../page-header';
import Controls from '../controls';
import Text from '../text';
import { EPageName } from '../../enums';

type PageTemplateProps = RouteComponentProps & {
  match: match;
  headerText: string;
  pageName: EPageName;
}

const PageTemplate = (
  { match, headerText, pageName }: PageTemplateProps): JSX.Element => {
  const { id } = match.params as any;

  return (
    <>
      <PageHeader headerText={headerText} />
      <Controls pageName={pageName} />
      <Text pageName={pageName} controlHeader={id} />
    </>
  );
};

export default withRouter(PageTemplate);