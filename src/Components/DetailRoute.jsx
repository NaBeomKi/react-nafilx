import React, { memo } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const DetailRoute = memo(({ id, type }) => {
  console.log(id, type);
  return (
    <Router>
      {/* <DetailHeader/> */}
      <header>
        <ul>
          <li>
            <Link to={`/${type}/${id}?tab=companies`}>
              Production Companies
            </Link>
          </li>
          <li>
            <Link to={`/${type}/${id}?tab=countries`}>
              Production Countries
            </Link>
          </li>
          <li>{/* <Link to={`/${type}/${id}?tab=companies`}>c</Link> */}</li>
        </ul>
      </header>
      <Switch>
        <Route />
      </Switch>
    </Router>
  );
});

export default DetailRoute;
