import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "818824afc2c5572a406037e215c9426d",
    language: "en-US",
  },
});

export const movieApi = {
  topRated: () => api.get("movie/top_rated"),
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
};
