import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import ClientListContainer from "../containers/ClientListContainer";
import EventListContainer from "../containers/EventContainers/EventListContainer";

const View = props => {
  return (
    <>
      <Navigation value={props.value} handleChange={props.handleChange} path={props.path} url={props.url} />
      <Route path={`${props.path}/users`}>
        <ClientListContainer />
      </Route>
      <Route path={`${props.path}/events`}>
        <EventListContainer />
      </Route>
    </>
  );
};

export default View;
