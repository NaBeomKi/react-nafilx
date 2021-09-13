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

const Video = styled.iframe``;

const Trailers = memo(({ trailers }) => {
  return (
    <DetailTabSection>
      {trailers.map((trailer) => (
        <List key={trailer.id}>
          <Video
            key={trailer.key}
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </List>
      ))}
    </DetailTabSection>
  );
});

export default Trailers;
