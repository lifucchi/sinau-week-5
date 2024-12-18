import React, { useState } from "react";
import MovieItemLayout from "../Layouts/MovieItemLayout";
import { BASE_URL, API_KEY } from "../config/config";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false); // To track if search is submitted

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchSubmitted(true);
    if (query.trim()) {
      fetchMovies(query);
    }
  };

  const fetchMovies = (searchQuery) => {
    setIsLoading(true);
    setError("");

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Failed to fetch data. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <div className=" p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-2 flex-wrap mb-6">
        <input type="text" value={query} onChange={handleSearch} placeholder="Search for a movie..." className="p-2 w-full sm:w-64 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 sm:mb-0" />
        <button type="submit" className="px-6 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white transition-transform transform hover:scale-105 hover:from-teal-500 hover:to-blue-600">
          Search
        </button>
      </form>
      {/* Loading Spinner */}
      {isLoading && (
        <div className="flex justify-center items-center mt-4">
          <div className="relative">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            <p className="text-white text-lg mt-4 animate-pulse">Loading...</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}

      {/* Display Movies in Horizontal Scroll */}
      <div className="mt-6 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="inline-flex space-x-6">{movies.length > 0 ? movies.map((movie) => <MovieItemLayout key={movie.id} movie={movie} />) : searchSubmitted && <div className="text-white text-center">No movies found</div>}</div>
      </div>
    </div>
  );
};

export default SearchBar;
