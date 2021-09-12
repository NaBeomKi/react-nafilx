import React, { memo } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Companies from "../Routes/Companies";

const COMPANIES = "companies";
const COUNTRIES = "countries";
const TRAILERS = "trailers";

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

const DetailHeader = ({ url, tab }) => {
  return (
    <Header>
      <Ul>
        <Li current={tab === COMPANIES}>
          <Link to={`${url}?tab=companies`}>Production Companies</Link>
        </Li>
        <Li current={tab === COUNTRIES}>
          <Link to={`${url}?tab=countries`}>Production Countries</Link>
        </Li>
        <Li current={tab === TRAILERS}>
          <Link to={`${url}?tab=trailers`}>Trailers</Link>
        </Li>
      </Ul>
    </Header>
  );
};

const DetailRoute = withRouter(
  memo((props) => {
    const {
      location: { pathname, search },
    } = props;
    const urlSearchParams = new URLSearchParams(search.slice(1));
    const tab = urlSearchParams.get("tab");

    return (
      <>
        <DetailHeader url={pathname} tab={tab} />
        {tab && tab === COMPANIES && <div>companies</div>}
        {tab && tab === COUNTRIES && <div>COUNTRIES</div>}
        {tab && tab === TRAILERS && <div>TRAILERS</div>}
      </>
    );
  })
);

export default DetailRoute;
