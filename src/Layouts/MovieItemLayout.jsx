import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaHeart, FaInfoCircle, FaTimes, FaPlay } from "react-icons/fa";
import { FaHeartCirclePlus, FaHeartCircleMinus } from "react-icons/fa6";
import { useFavorites } from "../context/FavoriteContext";

const MovieItemLayout = ({ movie }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = movie && favorites.some((fav) => fav.id === movie.id);
  const showDetail = () => {
    setIsDetailVisible(true);
  };

  const hideDetail = () => {
    setIsDetailVisible(false);
  };

  return (
    <div className="relative min-w-[200px] max-w-[300px] bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition-transform group">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />

      {/* Kontainer untuk konten yang muncul saat di-hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg font-bold truncate mb-2">{movie.title}</h2>
        <p className="text-gray-400 text-sm mb-2">{movie.release_date}</p>
        <p className="text-yellow-400 font-semibold mb-4">⭐ {movie.vote_average?.toFixed(1)}</p>

        <div className="flex space-x-2">
          {/* Detail Button */}
          <button className="flex items-center px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition" onClick={showDetail}>
            <FaInfoCircle className="text-sm" />
          </button>

          {/* Favorite Button */}
          <button onClick={() => toggleFavorite(movie)} className={`flex items-center px-3 py-2 text-sm rounded transition ${isFavorite ? "bg-gray-500 text-white hover:bg-gray-600" : "bg-red-500 text-white hover:bg-red-600"}`}>
            {isFavorite ? <FaHeartCircleMinus className="text-sm" /> : <FaHeartCirclePlus className="text-sm" />}
          </button>
        </div>
      </div>

      {/* Pop-up detail */}
      {isDetailVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-lg w-11/12 md:w-1/2 relative max-h-[75vh] overflow-y-auto">
            {/* Tombol Close */}
            <button className="absolute top-2 right-2 text-white hover:text-gray-300" onClick={hideDetail}>
              <FaTimes className="text-2xl" />
            </button>

            <div className="flex flex-col justify-center w-full text-white">
              <div className="flex justify-center items-center mb-4">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className="w-full h-[1500px] md:h-[400px] object-cover rounded-lg shadow-lg" />
              </div>
              {/* Tombol Play dan Favorite */}
              <div className="flex justify-center items-center mt-4 space-x-4">
                {/* Detail Button */}
                <Link key={movie.id} to={`/movie?id=${movie.id}`}>
                  <button className="flex items-center px-5 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
                    <FaInfoCircle className="text-2xl mr-2" />
                    Details
                  </button>
                </Link>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(movie)}
                  className={`flex items-center px-5 py-3 text-lg font-bold rounded-lg transition transform hover:scale-105 ${isFavorite ? "bg-gray-500 text-white hover:bg-gray-600" : "bg-red-500 text-white hover:bg-red-600"}`}
                >
                  {isFavorite ? (
                    <>
                      <FaHeartCircleMinus className="text-2xl mr-2" />
                      Remove
                    </>
                  ) : (
                    <>
                      <FaHeartCirclePlus className="text-2xl mr-2" />
                      Favorite
                    </>
                  )}
                </button>
              </div>

              <h2 className="text-white text-2xl font-bold mb-2">{movie.title}</h2>
              <p className="text-gray-300 mb-2">Release Date: {movie.release_date}</p>
              <p className="text-gray-300 mb-2">Rating: ⭐ {movie.vote_average?.toFixed(1)}</p>

              <div className="text-gray-300 w-full flex-grow overflow-y-auto max-h-[300px] break-words mt-4">
                <p className="whitespace-normal">Overview: {movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieItemLayout;
