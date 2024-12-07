import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import endpoints from "../config/endpoint";
import { FaHeartCirclePlus, FaHeartCircleMinus } from "react-icons/fa6";
import { useFavorites } from "../context/FavoriteContext";

function MovieDetailPage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = movie && favorites.some((fav) => fav.id === movie.id);

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoints.detailEndpoint(id), endpoints.options);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <p className="text-lg ml-4">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  // Jika `movie` belum tersedia (meskipun tidak loading)
  if (!movie) {
    return <div className="text-white text-center mt-4">Movie not found</div>;
  }

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Movie background image */}
      <div className="absolute inset-0">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="w-full h-full object-cover opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 md:px-8 md:py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-64 md:w-96 object-cover rounded-lg shadow-lg" />
            <div className="mt-6 md:mt-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
              <p className="text-gray-300 mb-4">{movie.release_date}</p>
              <p className="text-gray-300 mb-4">Rating: ⭐ {movie.vote_average?.toFixed(1)}</p>
              <p className="text-gray-300 mb-4">{movie.genres.name}</p>
              <p className="text-gray-300 mb-4"> Genre : {movie.genres.map((genre) => genre.name).join(", ")}</p>
              <p className="text-gray-300 mb-4">{movie.overview}</p>
              {/* Button for adding to favorites */}
              <button onClick={() => toggleFavorite(movie)} className={`flex items-center mt-4 px-4 py-2 rounded transition ${isFavorite ? "bg-gray-500 text-white hover:bg-gray-600" : "bg-red-500 text-white hover:bg-red-600"}`}>
                {isFavorite ? (
                  <>
                    <FaHeartCircleMinus className="mr-2" />
                    Remove from Favorites
                  </>
                ) : (
                  <>
                    <FaHeartCirclePlus className="mr-2" />
                    Add to Favorites
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
