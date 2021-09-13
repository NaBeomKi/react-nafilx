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

const CompanyLogo = styled.img`
  width: 100px;
`;

const Companies = memo(({ companies }) => {
  return (
    <DetailTabSection>
      {companies.map((company) => (
        <List key={company.id}>
          <CompanyLogo
            src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
            alt={company.name}
            title={company.name}
          />
        </List>
      ))}
    </DetailTabSection>
  );
});

export default Companies;
