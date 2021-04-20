import React, { useState, useEffect } from 'react';

import { dataURL } from '../../ts/mock-backend-service';

import './text.css';

import ErrorIndicator from '../error-indicator';
import { getInformation } from '../../ts/utils';
import { EPageName, EControlHeader } from '../../enums';
import { IDataBackend, IData, IPageKeys } from '../../interfaces';

type TextProps = {
  pageName: EPageName;
  controlHeader: EControlHeader;
}

const Text = ({ pageName, controlHeader }: TextProps) => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);
  const [ data, setData ] = useState<IDataBackend | {}>({data: { 'reduce': '', 'reuse': '', 'recycle': '' }});

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

  const pageData: IPageKeys = ((data as IDataBackend)?.data as IData)[pageName];

  const keyMap = {
    what: 'What?',
    how: 'How?',
    'more-information': 'More Information'
  };

  const dataKey: string = keyMap[controlHeader];

  if (dataKey === '') return <div>No data</div>;

  const textData = pageData[dataKey];
  const information = getInformation(textData);

  return (
    <div className='page-content'>
        {information}
    </div>
  );
};

export default Text;