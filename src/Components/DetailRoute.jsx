import React, { memo } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";
import Companies from "../Routes/Companies";

const Header = styled.header`
  margin-bottom: 1rem;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  margin-right: 0.625rem;
  color: ${(props) => (props.current ? "#f1c40f" : "#fff")};
  font-size: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const DetailHeader = withRouter((props) => {
  const {
    location: { search },
    history: { push },
  } = props;
  const urlSearchParams = new URLSearchParams(search.slice(1));
  const tab = urlSearchParams.get("tab");
  console.log(props);

  const handleBtnClick = (value) => () => {
    push({ search: `?tab=${value}` });
  };

  const handleBtnClick2 = (value) => () => {
    push({ search: `?lalalal=${value}` });
  };

  return (
    <Header>
      <Ul>
        <Li current={tab === "companies"}>
          {/* <Link to={`?tab=companies`}>Production Companies</Link> */}
          {/* <Link to="/movies/632632/companies">Production Companies</Link> */}
          <button onClick={handleBtnClick("companies")}>
            Production Companies
          </button>
        </Li>
        <Li current={tab === "countries"}>
          {/* <Link to={`?tab=countries`}>Production Countries</Link> */}
          <button onClick={handleBtnClick("countries")}>
            Production Companies
          </button>
        </Li>
        <Li current={tab === "trailers"}>
          {/* <Link to={`?tab=trailers`}>Trailers</Link> */}
          <button onClick={handleBtnClick2("trailers")}>
            Production Companies
          </button>
        </Li>
      </Ul>
    </Header>
  );
});

const DetailRoute = memo(() => {
  return (
    <>
      <Router>
        <DetailHeader />
        <Switch>
          {/* <Route
            path={["/movies/:id?tab=companies", "/shows/:id?tab=companies"]}
            render={() => <Companies />}
          /> */}
          <Route
            path={["/movies/:id/companies", "/shows/:id/companies"]}
            render={() => <Companies />}
          />
          <Route
            path={["/movies/:id?tab=countries", "/shows/:id?tab=countries"]}
            render={() => <Companies />}
            exact
          />
          <Route
            path={["/movies/:id?tab=trailers", "/shows/:id?tab=trailers"]}
            render={() => <Companies />}
          />
        </Switch>
      </Router>
    </>
  );
});

export default DetailRoute;
