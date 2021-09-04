import React from "react";
import styled from "styled-components";
import MovieArticle from "./MovieArticle";

const SectionWrapper = styled.section`
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Section = ({ title, data, type }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <ListContainer>
        {type === "movie"
          ? data.map((movie) => <MovieArticle key={movie.id} movie={movie} />)
          : null}
      </ListContainer>
    </SectionWrapper>
  );
};

export default Section;
