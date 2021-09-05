import React from "react";
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
`;

const Section = ({ title, data, type }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <ListContainer>
        {data.map((video) => (
          <VideoArticle key={video.id} video={video} />
        ))}
      </ListContainer>
    </SectionWrapper>
  );
};

export default Section;
