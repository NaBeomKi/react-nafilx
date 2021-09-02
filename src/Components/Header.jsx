import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  height: 3.5rem;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-weight: bold;
  color: #e50a14;
`;

const ListContainer = styled.ul`
  display: flex;
  height: 100%;
  font-size: 0.825rem;
`;

const List = styled.li`
  border-bottom: 2px solid
    ${(props) => (props.current ? "#81ecec" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const Header = withRouter((props) => {
  const {
    location: { pathname },
  } = props;

  return (
    <HeaderWrapper>
      <StyledLink to="/">
        <Title>NAFLIX</Title>
      </StyledLink>
      <nav>
        <ListContainer>
          <List current={pathname === "/movies"}>
            <StyledLink to="/movies">Movies</StyledLink>
          </List>
          <List current={pathname === "/tv"}>
            <StyledLink to="/tv">TV</StyledLink>
          </List>
          <List current={pathname === "/search"}>
            <StyledLink to="/search">Search</StyledLink>
          </List>
        </ListContainer>
      </nav>
    </HeaderWrapper>
  );
});

export default Header;
