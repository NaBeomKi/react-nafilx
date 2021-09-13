import React, { memo } from "react";
import styled from "styled-components";
import DetailTabSection from "../Components/DetailTabSection";

const List = styled.li`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Countries = memo(({ countries }) => {
  return (
    <DetailTabSection>
      {countries.map((country) => (
        <List key={country.iso_3166_1}>
          <img
            src={`https://www.countryflags.io/${country.iso_3166_1}/shiny/64.png`}
            alt={country.name}
            title={country.name}
          />
        </List>
      ))}
    </DetailTabSection>
  );
});

export default Countries;
