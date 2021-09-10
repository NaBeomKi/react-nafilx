import React, { memo } from "react";
import { Link } from "react-router-dom";
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
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
`;

const DateAndRatingContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Date = styled("span")`
  font-size: 0.125rem;
  opacity: 0.7;
`;

const Rating = styled("span")`
  font-size: 0.125rem;
`;

const VideoArticle = memo(({ video, type }) => {
  const {
    id,
    backdrop_path,
    original_title,
    original_name,
    overview,
    release_date,
    first_air_date,
    vote_average,
    vote_count,
  } = video;

  return (
    <Article>
      <Link to={`/${type}/${id}`}>
        <Backdrop
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : require("../assets/404.png").default
          }
        />
        <InnerContainer>
          <Backdrop
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                : require("../assets/404.png").default
            }
          />
          <InfoContainer>
            <Title>{original_title ? original_title : original_name}</Title>
            <Text>{overview.substring(0, 180)}...</Text>
            <DateAndRatingContainer>
              <Date>{release_date ? release_date : first_air_date}</Date>
              <Rating>
                ⭐️ {vote_average}/10 ({vote_count})
              </Rating>
            </DateAndRatingContainer>
          </InfoContainer>
        </InnerContainer>
      </Link>
    </Article>
  );
});

export default VideoArticle;
