import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './controls.css';
import ErrorIndicator from '../error-indicator';

const dataURL = 'https://api.jsonbin.io/b/6000126d8aa7af359da9dbb5';

type ComponentProps = {
  pageName: string;
  history: string;
};

const Controls = ({ pageName, history }: ComponentProps) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);
  const [ data, setData ] = useState({});

  const fetchData = () => {
    fetch(dataURL)
      .then((res) => res.json())
      .then(({data}) => {
        setIsLoading(false);
        setHasError(false);
        setData(data);
        })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
        setData({});
      });
  }

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
  
  let controlHeaders: Array<string> | null = [];

  if (data) {
    controlHeaders = Object.keys(data[pageName]);
  }
  
  const controlItems = controlHeaders.map((header) => {
    const controlHeader = header.toLowerCase().replace('?', '').replace(' ', '-');
        
    return (
      <li 
        key={header}
        className='controls__item'
        onClick={() => {
          history.push(controlHeader)
        }}
      >
        {header}
      </li>
    );
  });

  return (
    <nav className='controls'>
      <ul className='controls__list'>{controlItems}</ul>
    </nav>
  );
}

export default withRouter(Controls);