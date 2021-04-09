import React, { useState, useEffect } from 'react';

import './text.css';

import ErrorIndicator from '../error-indicator';
import { getInformation } from '../../ts/utils';

const dataURL = 'https://api.jsonbin.io/b/6000126d8aa7af359da9dbb5';

const Text = ({ pageName, controlHeader }) => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);
  const [ data, setData ] = useState({});

  const fetchData = () => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setHasError(false);
        setData(data);
        })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
        setData({});
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (hasError) {
    return <ErrorIndicator />;
  }

  const pageData = data.data[pageName];

  const keyMap = {
    what: 'What?',
    how: 'How?',
    'more-information': 'More Information'
  };

  const dataKey = keyMap[controlHeader];

  const textData = pageData[dataKey];
  const information = getInformation(textData);

  return (
    <div className='page-content'>
        {information}
    </div>
  );
};

export default Text;