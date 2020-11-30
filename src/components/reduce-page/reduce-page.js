import React from 'react';

import './reduce-page.css';

import Row from '../row';
import data from '../../data';

const ReducePage = () => {
  const dataArray = Object.entries(data).map((item) => Object.entries(item[1]));
  const reduceData = dataArray[0].map((item) => { return [item[0], item[1]]});
  const reduceRows = reduceData.map((array) => {
    let text = array[1];

    if (Array.isArray(text)) {
      const items = text.map((item) => <li key={item}>{item}</li>);

      text = (<ul>{items}</ul>);
    } else {
      text = <p>{text}</p>;
    }

    return <Row rowHeader={array[0]} rowText={text} key={array[0]} />
  });

  return (
    <>
      <div className="reduce-page" >
        I am the reduce page.
      </div>
      {reduceRows}
    </>
  );
};

export default ReducePage;