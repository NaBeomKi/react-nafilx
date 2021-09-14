import React, { memo, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { movieApi } from "../api";
import Message from "../Components/Message";
import Section from "../Components/Section";

const Container = styled.main``;

const SET_RESULTS = "setResults";
const SET_LOADING = "setLoading";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        topRated: action.topRated,
        nowPlaying: action.nowPlaying,
        upcoming: action.upcoming,
        popular: action.popular,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return;
  }
};

const initState = {
  loading: true,
  topRated: [],
  nowPlaying: [],
  upcoming: [],
  popular: [],
};

const Movies = memo(() => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getData = async () => {
    try {
      const {
        data: { results: topRated },
      } = await movieApi.topRated();
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();
      const {
        data: { results: popular },
      } = await movieApi.popular();

      dispatch({
        type: SET_RESULTS,
        topRated,
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: SET_LOADING, loading: false });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet title="Movies | Naflix" />
      {state.loading ? (
        <Message message="📡 Loading" />
      ) : (
        <Container>
          {state.topRated && state.topRated.length > 0 && (
            <Section title="Top Rated" data={state.topRated} type="movies" />
          )}
          {state.nowPlaying && state.nowPlaying.length > 0 && (
            <Section
              title="Now Playing"
              data={state.nowPlaying}
              type="movies"
            />
          )}
          {state.upcoming && state.upcoming.length > 0 && (
            <Section title="Upcoming" data={state.upcoming} type="movies" />
          )}
          {state.popular && state.popular.length > 0 && (
            <Section title="Popular" data={state.popular} type="movies" />
          )}
        </Container>
      )}
    </>
  );
});

export default Movies;
