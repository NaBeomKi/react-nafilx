import React, { memo, useContext } from "react";
import styled from "styled-components";
import DetailTabContent from "../Components/DetailTabContent";
import { DetailTabContext } from "../Contexts/DetailTabContext";

const List = styled.li`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Countries = memo(() => {
  const { countries } = useContext(DetailTabContext);
  return (
    <DetailTabContent>
      {countries.length ? (
        countries.map((country) => (
          <List key={country.iso_3166_1}>
            <img
              src={`https://www.countryflags.io/${country.iso_3166_1}/shiny/64.png`}
              alt={country.name}
              title={country.name}
            />
          </List>
        ))
      ) : (
        <List>No Result</List>
      )}
    </DetailTabContent>
  );
});

export default Countries;
