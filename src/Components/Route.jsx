import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Movies from "../Routes/Movies";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Header from "./Header";

const RouteComponent = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

export default RouteComponent;
