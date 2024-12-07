import React from "react";
import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  // Fetch data berdasarkan query (similar to SearchBar but here you can use useEffect)
  return (
    <div className="container mx-auto p-4 space-y-16">
      <h2 className="text-white text-2xl mb-4">Results for "{query}"</h2>
      {/* Map through the movie results */}
      {/* Replace with actual fetching logic */}
    </div>
  );
};

export default SearchResultsPage;
