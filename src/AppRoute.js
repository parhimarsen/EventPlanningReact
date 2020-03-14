import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Container from "./pages/AdminPage/containers/Container";

  export default function AppRoute() {
      return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <Container />
                </Route>
                <Route path="/user">
                    <h1>User</h1>
                </Route>
            </Switch>
        </Router>
      );
  }