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

const CompanyLogo = styled.img`
  width: 100px;
`;

const Companies = memo(() => {
  const { companies } = useContext(DetailTabContext);
  return (
    <DetailTabContent>
      {companies.length ? (
        companies.map((company) => (
          <List key={company.id}>
            <CompanyLogo
              src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
              alt={company.name}
              title={company.name}
            />
          </List>
        ))
      ) : (
        <List>No Result</List>
      )}
    </DetailTabContent>
  );
});

export default Companies;
