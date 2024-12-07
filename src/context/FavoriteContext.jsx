import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      // Hindari duplikasi berdasarkan ID film
      if (!prev.some((fav) => fav.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== movieId));
  };

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === movie.id)) {
        return prev.filter((fav) => fav.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  return <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, toggleFavorite }}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => useContext(FavoritesContext);
