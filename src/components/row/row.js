import React, { Component } from 'react';

import './row.css';

class Row extends Component {
  state = {
    showText: false
  }

  toggleShowText = () => {
    this.setState({
      showText: !this.state.showText
    });
  };
  
  render() {
    const { rowHeader, rowText } = this.props;
    const { showText } = this.state;

    return (
      <div className='row'>
          <h3 className='row__header' onClick={this.toggleShowText}>
            {rowHeader}
          </h3>
        { showText ? (
          <div className='row__text'>
            {rowText}
          </div>
          ) : null }
      </div>
    );
  }
};

export default Row;