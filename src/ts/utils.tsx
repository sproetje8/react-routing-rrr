import { TextDataType } from '../types';

const getInformation = (textData: TextDataType) => {
  let information;

  if (Array.isArray(textData)) {
    const listItems = textData.map((item, index) => {
        return `<li key={index}>{item}</li>`;
      });
    information = <ul className='text__list'>{listItems}</ul>;
  } else {
    information = <p className='text__paragraph'>{textData}</p>;
  }

  return information;
};

export {
  getInformation
};
