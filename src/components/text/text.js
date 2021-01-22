import React, { Component } from 'react';

import './text.css';

import ErrorIndicator from '../error-indicator';
import { getInformation } from '../../js/utils.js';

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
    const information = getInformation(textData);

    return (
      <div className='page-content'>
          {information}
      </div>
    );
  }
}

export default Text;