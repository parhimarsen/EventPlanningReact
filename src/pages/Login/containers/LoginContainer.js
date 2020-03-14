import React from "react";
import Login from "../components/Login";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: { login: "", password: "" } };
  }

  handleChangeLogin = value => {
    this.setState({
      user: { ...this.state.user, login: value }
    });
  };

  handleChangePassword = value => {
    this.setState({
      user: { ...this.state.user, password: value }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    fetch("http://localhost:51560/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    });
    //.then(response => response.json())
    // const token = localStorage.getItem('authToken')
    //.then(token => localStorage.setItem("authToken", token));
  };

  render() {
    return (
      <Login
        login={this.state.login}
        password={this.state.password}
        handleSubmit={this.handleSubmit}
        handleChangeLogin={this.handleChangeLogin}
        handleChangePassword={this.handleChangePassword}
      />
    );
  }
}

export default LoginContainer;
