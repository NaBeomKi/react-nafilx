import React, { memo, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { tvApi } from "../api";
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
        airingToday: action.airingToday,
        onTheAir: action.onTheAir,
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

const initData = {
  loading: true,
  topRated: [],
  airingToday: [],
  onTheAir: [],
  popular: [],
};

const TV = memo(() => {
  const [state, dispatch] = useReducer(reducer, initData);

  const getData = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: onTheAir },
      } = await tvApi.onTheAir();
      const {
        data: { results: popular },
      } = await tvApi.popular();

      dispatch({
        type: SET_RESULTS,
        topRated,
        airingToday,
        onTheAir,
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
      <Helmet title="TV Shows | Naflix" />
      {state.loading ? (
        <Message message="📡 Loading" />
      ) : (
        <Container>
          {state.topRated && state.topRated.length > 0 && (
            <Section title="Top Rated" data={state.topRated} type="shows" />
          )}
          {state.airingToday && state.airingToday.length > 0 && (
            <Section
              title="Airing To Day"
              data={state.airingToday}
              type="shows"
            />
          )}
          {state.onTheAir && state.onTheAir.length > 0 && (
            <Section title="On The Air" data={state.onTheAir} type="shows" />
          )}
          {state.popular && state.popular.length > 0 && (
            <Section title="Popular" data={state.popular} type="shows" />
          )}
        </Container>
      )}
    </>
  );
});

export default TV;
