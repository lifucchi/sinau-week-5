import React, { useEffect, useState, useRef } from "react";
import MovieItemLayout from "../Layouts/MovieItemLayout";
import { BASE_URL, API_KEY } from "../config/config";

const MoviePage = ({ categoryTitle, apiEndpoint }) => {
  const url = `${BASE_URL}${apiEndpoint}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const scrollContainerRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    let scrollInterval;
    if (!loading) {
      const startSlider = () => {
        const scrollContainer = document.querySelector(".movie-slider");
        scrollInterval = setInterval(() => {
          if (scrollContainer) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

            if (scrollLeft + clientWidth >= scrollWidth) {
              scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
            }
          }
        }, 2000);
      };

      startSlider();
    }
    return () => clearInterval(scrollInterval);
  }, [loading]);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen p-8 pt-24">
      <h1 className="text-white text-4xl font-bold text-center mb-8">{categoryTitle} Movies</h1>
      <div className="relative">
        {/* Tombol Scroll Kiri */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 px-6 py-2 text-white rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 mt-4 transition-transform transform hover:scale-105 hover:from-teal-500 hover:to-blue-600  z-10"
        >
          &#60;
        </button>

        {/* Daftar Film */}
        <div ref={scrollContainerRef} className=" movie-slider overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
          <div className="inline-flex space-x-6">{movies.length > 0 ? movies.map((movie) => <MovieItemLayout key={movie.id} movie={movie} />) : <div className="text-white text-center">No movies found</div>}</div>
        </div>

        {/* Tombol Scroll Kanan */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-2 text-white rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 mt-4 transition-transform transform hover:scale-105 hover:from-teal-500 hover:to-blue-600 z-10"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
