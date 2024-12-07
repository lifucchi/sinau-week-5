import React, { useEffect, useState } from "react";
import MovieItemLayout from "../Layouts/MovieItemLayout";
import endpoints from "../config/endpoint";

const MovieListPage = ({ categoryTitle, apiEndpoint }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${endpoints.dynamicEndpoint(apiEndpoint, currentPage)}`, endpoints.options);
        console.log(endpoints.dynamicEndpoint(apiEndpoint, currentPage));

        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }

        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage, apiEndpoint]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
    console.log(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-4">
        <div className="relative">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="text-white text-lg mt-4 animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-0 p-8 pt-24">
      <h1 className="text-white text-4xl font-bold text-center mb-8">{categoryTitle} Movies</h1>
      <div className="relative">
        {/* Daftar Film */}
        <div className="movie-slider w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length > 0 ? movies.map((movie) => <MovieItemLayout key={movie.id} movie={movie} />) : <div className="text-white text-center col-span-full">No movies found</div>}
        </div>
      </div>
      {/* Pagination Controls */}

      <div className="flex justify-center space-x-2 my-6">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <span className="text-gray-300 px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieListPage;
