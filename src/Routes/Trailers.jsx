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

const Video = styled.iframe``;

const Trailers = memo(() => {
  const { trailers } = useContext(DetailTabContext);
  return trailers.length ? (
    <DetailTabContent>
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
    </DetailTabContent>
  ) : (
    <Message message="No result" />
  );
});

export default Trailers;
