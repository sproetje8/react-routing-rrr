import React, { Component } from 'react';

const withHeaderName = (View) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
          controlHeader: '',
          setControlHeader: this.setControlHeader
        };
    }
  
    setControlHeader = (event, controlHeader) => {
      this.setState({
        controlHeader,
      });
    };
  
    render() {
      return (<View {...this.props} {...this.state} />);
    }
  }
};

export default withHeaderName;
