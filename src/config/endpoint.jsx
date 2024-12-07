import { BASE_URL, API_KEY } from "../config/apiConfig";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const endpoints = {
  dynamicEndpoint: (apiEndpoint, currentPage = 1, language = "en-US") => `${BASE_URL}movie/${apiEndpoint}?language=${language}&page=${currentPage}`,
  options,
  detailEndpoint: (movieId) => {
    return `${BASE_URL}movie/${movieId}`;
  },
  searchEndpoint: (searchQuery, language = "en-US", currentPage = 1) => {
    return `${BASE_URL}search/movie?query=${searchQuery}&include_adult=false&language=${language}&page=${currentPage}`;
  },
};

export default endpoints;
