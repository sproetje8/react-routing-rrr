import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  const errorMessage = 'Something went wrong';

  return (
    <div className='error-indicator'>
      { errorMessage }
    </div>
    );
};

export default ErrorIndicator;
