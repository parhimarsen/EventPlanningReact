import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminContainer from "./pages/AdminPage/containers/Container";
import UserContainer from "./pages/UserPage/containers/Container";
import LoginContainer from "./pages/Login/containers/LoginContainer";
import RegistrationContainer from "./pages/Registrate/containers/RegistrationContainer";

export default function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminContainer />
        </Route>
        <Route path="/user">
          <UserContainer />
        </Route>
        <Route path="/login">
          <LoginContainer />
        </Route>
        <Route path="/registration">
          <RegistrationContainer />
        </Route>
        <Route path="/user">
          <h1>User</h1>
        </Route>
      </Switch>
    </Router>
  );
}
