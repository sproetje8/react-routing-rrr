import React, { Component } from 'react';

import './text.css';

import ErrorIndicator from '../error-indicator';

const dataURL = 'https://api.jsonbin.io/b/6000126d8aa7af359da9dbb5';

class Text extends Component {

  state = {
    isLoading: true,
    hasError: false,
    data: {}
  }

  componentDidMount = () => {
    fetch(dataURL).then((res) => res.json()).then((data) => {
      this.setState({
        isLoading: false,
        hasError: false,
        data
      });
    })
    .catch(() => {
      this.setState({
        isLoading: false,
        hasError: true,
        data: {}
      });
    });
  };

  render() {
    const { isLoading, hasError, data } = this.state;
    const { pageName, controlHeader } = this.props;

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
  }
}

export default Text;