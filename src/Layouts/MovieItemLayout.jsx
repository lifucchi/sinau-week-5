import React from "react";

const MovieItemLayout = ({ movie }) => {
  return (
    <div key={movie.id} className="min-w-[200px] max-w-[300px] bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-white text-lg font-bold truncate">{movie.title}</h2>
        <p className="text-gray-400 text-sm">{movie.release_date}</p>
        <p className="text-yellow-400 font-semibold">⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieItemLayout;
