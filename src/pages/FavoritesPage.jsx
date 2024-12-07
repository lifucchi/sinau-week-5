import React from "react";
import { useFavorites } from "../context/FavoriteContext";
import MovieItemLayout from "../Layouts/MovieItemLayout";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-white text-4xl font-bold text-center mb-8">Favorites</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieItemLayout key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
