import React, { Component } from 'react';

const withToggle = (View) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
          headerName: '',
          setHeaderName: this.setHeaderName
        };
    }
  
    setHeaderName = (event, headerName) => {
      this.setState({
        headerName,
      });
    };
  
    render() {
      return (<View {...this.props} {...this.state} />);
    }
  }
};

export default withToggle;
