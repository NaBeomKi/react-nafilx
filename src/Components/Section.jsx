import React, { memo } from "react";
import styled from "styled-components";
import VideoArticle from "./VideoArticle";

const SectionWrapper = styled.section`
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 2.5rem;
  font-size: 2rem;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = memo(({ title, data, type }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <ListContainer>
        {data.map((video) => (
          <VideoArticle key={video.id} video={video} type={type} />
        ))}
      </ListContainer>
    </SectionWrapper>
  );
});

export default Section;
