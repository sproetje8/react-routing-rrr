import React from 'react';

import './text.css';

const Text = (props) => {

  return (
    <div className='text'>
      {props.children}
    </div>
  );
};

export default Text;