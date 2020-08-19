import React from "react";

const withLoadStatus = (Component) => {
  class WithLoadStatus extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoad: null,
      };

      this.onSuccess = this.onSuccess.bind(this);
      this.onError = this.onError.bind(this);
    }

    onSuccess() {
      this.setState({
        isLoad: true
      })
    }

    onError() {
      this.setState({
        isLoad: false
      })
    }

    render() {
      return (
      <Component 
        {...this.props} 
        isLoad={this.state.isLoad}
        onSuccess={this.onSuccess}
        onError={this.onError}
      />
      )
    }
  }

  return WithLoadStatus;
};

export default withLoadStatus;
