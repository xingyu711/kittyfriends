import React, { Component } from 'react';
import { render } from '@testing-library/react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h2>Sorry, something goes wrong. We'll fix it ASAP.</h2>
    }
    return this.props.children
  }
}

export default ErrorBoundry;