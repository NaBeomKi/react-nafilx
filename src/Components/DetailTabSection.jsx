import React from "react";
import styled from "styled-components";

const ListSection = styled.section`
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Lists = styled.ul`
  overflow-y: auto;
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
  max-height: 31.25rem;
`;

const DetailTabSection = ({ children }) => {
  return (
    <ListSection>
      <Lists>{children}</Lists>
    </ListSection>
  );
};

export default DetailTabSection;
