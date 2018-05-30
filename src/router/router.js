import React from "react";
import { Route } from "react-router-dom";

import Header from "../header";

import {App,Posts} from './lazy'


class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <Route  path="/posts" component={Posts} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
