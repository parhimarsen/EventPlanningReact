import React from "react";
import Navigation from "../components/Navigation";
import { Route } from "react-router-dom";
import EventListContainer from "../containers/EventListContainer";

const View = props => {
  return (
    <>
      <Navigation
        value={props.value}
        anchorEl={props.anchorEl}
        handleMenu={props.handleMenu}
        handleClose={props.handleClose}
        handleChange={props.handleChange}
        path={props.path}
        url={props.url}
      />
      <Route path={`${props.path}/events`}>
        <EventListContainer />
      </Route>
    </>
  );
};

export default View;
