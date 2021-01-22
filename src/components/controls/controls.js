import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './controls.css';
import ErrorIndicator from '../error-indicator';

const dataURL = 'https://api.jsonbin.io/b/6000126d8aa7af359da9dbb5';

class Controls extends Component {
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
    const { pageName, history } = this.props;

    if (isLoading) {
      return (
        <div>Loading...</div>
      );
    }
  
    if (hasError) {
      return <ErrorIndicator />;
    }
  
    const controlHeaders = Object.keys(data.data[pageName]);
    
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
}

export default withRouter(Controls);