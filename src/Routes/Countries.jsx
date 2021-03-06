import React, { memo, useContext } from "react";
import styled from "styled-components";
import DetailTabContent from "../Components/DetailTabContent";
import Message from "../Components/Message";
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
  return countries.length ? (
    <DetailTabContent>
      {countries.map((country) => (
        <List key={country.iso_3166_1}>
          <img
            src={`https://www.countryflags.io/${country.iso_3166_1}/shiny/64.png`}
            alt={country.name}
            title={country.name}
          />
        </List>
      ))}
    </DetailTabContent>
  ) : (
    <Message message="No result" />
  );
});

export default Countries;
