import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "../Routes/Detail";
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
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id" component={Detail} />
        <Route path="/shows" exact component={TV} />
        <Route path="/shows/:id" component={Detail} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

export default RouteComponent;
