import React from "react";
import View from "../components/View";
import { withRouter } from "react-router";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.location.pathname, anchorEl: null };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { path, url } = this.props.match;
    return (
      <View
        value={this.state.value}
        handleChange={this.handleChange}
        anchorEl={this.state.anchorEl}
        handleMenu={this.handleMenu}
        handleClose={this.handleClose}
        path={path}
        url={url}
      />
    );
  }
}

export default withRouter(Container);
