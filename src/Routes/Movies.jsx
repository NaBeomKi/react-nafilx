import React, { useEffect, useReducer } from "react";
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
        upComing: action.upComing,
        popular: action.popular,
        latest: action.latest,
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
  upComing: [],
  popular: [],
  latest: [],
};

const Movies = () => {
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
        data: { results: upComing },
      } = await movieApi.upComing();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: latest },
      } = await movieApi.latest();

      dispatch({
        type: SET_RESULTS,
        topRated,
        nowPlaying,
        upComing,
        popular,
        latest,
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

  console.log(state.loading);

  return state.loading ? (
    <Message message="📡 Loading" />
  ) : (
    <Container>
      {state.topRated && state.topRated.length > 0 && (
        <Section title="Top Rated" data={state.topRated} type="movie" />
      )}
      {state.nowPlaying && state.nowPlaying.length > 0 && (
        <Section title="Now Playing" data={state.nowPlaying} type="movie" />
      )}
      {state.upComing && state.upComing.length > 0 && (
        <Section title="Up Coming" data={state.upComing} type="movie" />
      )}
      {state.popular && state.popular.length > 0 && (
        <Section title="Popular" data={state.popular} type="movie" />
      )}
      {state.latest && state.latest.length > 0 && (
        <Section title="Latest" data={state.latest} type="movie" />
      )}
    </Container>
  );
};

export default Movies;
