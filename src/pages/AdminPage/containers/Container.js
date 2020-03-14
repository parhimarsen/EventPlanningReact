import React from "react";
import View from "../components/View";
import { withRouter } from "react-router";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.location.pathname };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };  

  render() {
    const { path, url } = this.props.match;
    return (
      <View
        value={this.state.value}
        handleChange={this.handleChange}
        path={path}
        url={url}
      />
    );
  }
}

export default withRouter(Container);
