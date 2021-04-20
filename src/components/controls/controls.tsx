import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './controls.css';
import ErrorIndicator from '../error-indicator';

import { ControlsProps } from '../../types';
import { IDataBackend, IData } from '../../interfaces';
import { dataURL } from '../../ts/mock-backend-service';

type PropsType = RouteComponentProps & ControlsProps;

const Controls = ({ pageName, history }: PropsType) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<IDataBackend | {}>({data: { 'reduce': '', 'reuse': '', 'recycle': ''}});

  const fetchData = () => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((data: IDataBackend) => {
        if (data) {
          setIsLoading(false);
          setHasError(false);
          setData(data);
        }
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

  let controlHeaders: string[] | null = [];

  if (data) {
    controlHeaders = Object.keys(((data as IDataBackend)?.data as IData)[pageName]);
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