import React, { memo, useState } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "../api";
import Message from "../Components/Message";
import Section from "../Components/Section";

const Form = styled.form`
  padding: 1rem 2rem;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
  border-bottom: 1px solid #ccc;
`;

const Container = styled.main``;

const Search = memo(() => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  const getData = async (term) => {
    setLoading(true);
    try {
      const {
        data: { results: moviesData },
      } = await movieApi.search(term);
      const {
        data: { results: showsData },
      } = await tvApi.search(term);
      console.log(moviesData, showsData);
      setMovies(moviesData);
      setShows(showsData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    getData(term);
  };

  const onChangeInput = (e) => {
    setTerm(e.target.value);
  };

  return (
    <Container>
      <div>
        <Form onSubmit={onSubmitForm}>
          <Input
            type="text"
            value={term}
            onChange={onChangeInput}
            placeholder="Search by term"
          />
        </Form>
      </div>
      {loading ? (
        <Message message="📡 Loading" />
      ) : (
        <>
          {movies && movies.length > 0 && (
            <Section title="Movies" data={movies} />
          )}
          {shows && shows.length > 0 && (
            <Section title="TV Shows" data={shows} />
          )}
        </>
      )}
    </Container>
  );
});

export default Search;
