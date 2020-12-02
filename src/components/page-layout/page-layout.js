import React from 'react';

import './page-layout.css';

import data from '../../data';
import Controls from '../controls';
import Text from '../text';
import withToggle from '../hoc-helpers/withToggle';

const PageLayout = ({ 
  pageName,
  setHeaderName,
  headerName
}) => {
  const pageHeader = data[pageName].pageHeader;
  let text = '';
  
  switch (headerName) {
    case 'what':
      text = data[pageName].definitionText;
      break;
    case 'how':
      text = data[pageName].tipsText;
      break;
    case 'more-information':
      const resources = data[pageName].resourcesText;
      const resourceList = resources.map((resource) => {
        return (
          <li className='resources__item' key={resource}>{resource}</li>
        );
      });
      text = (<ul className='resources__list'>{resourceList}</ul>);
      break;
    default:
      text = '';
      break;    
  }

  return (
    <div className='page'>
      <h3 className='page__header'>
        {pageHeader}
      </h3>
      <Controls pageName={pageName} setHeaderName={setHeaderName} />
      { headerName === '' ? 
        null : 
        (<Text>{text}</Text>) }
    </div>
  );
};

export default withToggle(PageLayout);