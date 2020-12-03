import React from 'react';

import './text.css';

import data from '../../data';

const Text = ({ pageName, controlHeader }) => {
  const pageData = data[pageName];
  const textData = pageData[controlHeader];
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