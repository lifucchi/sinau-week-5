import React, { useEffect, useState, useRef } from "react";
import MovieItemLayout from "../Layouts/MovieItemLayout";
import endpoints from "../config/endpoint";

const MoviePage = ({ categoryTitle, apiEndpoint }) => {
  const scrollContainerRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(endpoints.dynamicEndpoint(apiEndpoint), endpoints.options);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
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
    const scrollContainer = document.querySelector(".movie-slider");

    if (!loading && scrollContainer) {
      const startSlider = () => {
        scrollInterval = setInterval(() => {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

          if (scrollLeft + clientWidth >= scrollWidth) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
          }
        }, 2000);
      };

      startSlider();

      // Menghentikan slider saat di-hover
      const stopSlider = () => {
        clearInterval(scrollInterval);
      };

      const resumeSlider = () => {
        startSlider();
      };

      scrollContainer.addEventListener("mouseenter", stopSlider);
      scrollContainer.addEventListener("mouseleave", resumeSlider);

      return () => {
        clearInterval(scrollInterval);
        if (scrollContainer) {
          scrollContainer.removeEventListener("mouseenter", stopSlider);
          scrollContainer.removeEventListener("mouseleave", resumeSlider);
        }
      };
    }
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
    <div className="relative min-h-0 p-8 pt-24">
      <h1 className="text-white text-4xl font-bold text-center mb-8">{categoryTitle} Movies</h1>
      <div className="relative">
        {/* Tombol Scroll Kiri */}
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-64 flex items-center justify-center text-white rounded-lg bg-black bg-opacity-50 hover:bg-opacity-100 transition-opacity z-20">
          <span className="text-3xl">&#60;</span>
        </button>

        {/* Daftar Film */}
        <div ref={scrollContainerRef} className="movie-slider w-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
          <div className="inline-flex space-x-6">{movies.length > 0 ? movies.map((movie) => <MovieItemLayout key={movie.id} movie={movie} />) : <div className="text-white text-center center">No movies found</div>}</div>
        </div>

        {/* Tombol Scroll Kanan */}
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-64 flex items-center justify-center text-white rounded-lg bg-black bg-opacity-50 hover:bg-opacity-100 transition-opacity z-20">
          <span className="text-3xl">&#62;</span>
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
