import React, { memo } from "react";
import styled from "styled-components";

const Article = styled("article")`
  position: relative;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    z-index: 1;
  }
`;

const Backdrop = styled("img")`
  width: 100%;
  border-radius: 8px;
`;

const InnerContainer = styled("div")`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background: #141414;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.2);
    box-shadow: 5px 5px 15px 5px #000;
  }
  &:hover > img,
  &:focus > img {
    border-radius: 0;
  }
  &:hover > div,
  &:focus > div {
    display: block;
  }
`;

const InfoContainer = styled("div")`
  display: none;
  padding: 1em;
`;

const Title = styled("h3")`
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const Text = styled("p")`
  font-size: 0.875rem;
`;

const VideoArticle = memo(({ video }) => {
  const { backdrop_path, original_title, original_name, overview } = video;
  return (
    <Article>
      <Backdrop
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
            : "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8NDA0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      />
      <InnerContainer>
        <Backdrop
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8NDA0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        />
        <InfoContainer>
          <Title>{original_title ? original_title : original_name}</Title>
          <Text>{overview.substring(0, 180)}...</Text>
        </InfoContainer>
      </InnerContainer>
    </Article>
  );
});

export default VideoArticle;
