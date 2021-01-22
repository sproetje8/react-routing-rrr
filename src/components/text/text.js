import React from 'react';

import './text.css';

import data from '../../data';

const Text = ({ pageName, controlHeader }) => {
  const pageData = data[pageName];
  let dataKey = '';

  switch (controlHeader) {
    case 'what':
      dataKey = 'What?';
      break;
    case 'how':
      dataKey = 'How?';
      break;
    case 'more-information':
      dataKey = 'More Information';
      break;
    default:
      break;
  }

  const textData = pageData[dataKey];
  let text;
  
  if (Array.isArray(textData)) {
    const listItems = textData.map((item, index) => {
        return <li key={index}>{item}</li>;
      });
    text = <ul className='text__list'>{listItems}</ul>;
  } else {
    text = <p className='text__paragraph'>{textData}</p>;
  }

  return (
    <div className='text'>
        {text}
    </div>
  );
};

export default Text;