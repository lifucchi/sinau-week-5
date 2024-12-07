import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoriteContext";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import MoviePage from "./pages/MoviePage";
import Login from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieListPage from "./pages/MovieListPage";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <div className="App bg-gradient-to-b from-gray-700 via-gray-800 to-black text-white min-h-screen">
            <Routes>
              <Route
                path="/login"
                element={
                  <>
                    <Login />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <div className="relative flex flex-col items-center justify-center ">
                      <div className="w-full p-8 rounded-lg shadow-md bg-gray-800 relative z-20">
                        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 font-bold text-center font-sans text-2xl sm:text-6xl md:text-4xl lg:text-6xl mb-8">
                          5movies
                        </h4>
                        <SearchBar />
                      </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center ">
                      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none"></div>
                    </div>
                    <div className="container mx-auto p-4 space-y-16">
                      <div id="nowplaying">
                        <MoviePage categoryTitle="Now Playing" apiEndpoint="now_playing" />
                      </div>
                      <div id="popular">
                        <MoviePage categoryTitle="Popular" apiEndpoint="popular" />
                      </div>
                      <div id="toprated">
                        <MoviePage categoryTitle="Top Rated" apiEndpoint="top_rated" />
                      </div>
                      {/* <div id="upcoming">
                        <MoviePage categoryTitle="Upcoming" apiEndpoint="upcoming" />
                      </div> */}
                    </div>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/movie"
                element={
                  <>
                    <PrivateRoute>
                      <Navbar />
                      <MovieDetailPage />
                    </PrivateRoute>
                  </>
                }
              />
              <Route
                path="/favorites"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <FavoritesPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/nowplaying"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <MovieListPage categoryTitle="Now Playing" apiEndpoint="now_playing" />
                  </PrivateRoute>
                }
              />
              <Route
                path="/popular"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <MovieListPage categoryTitle="Popular" apiEndpoint="popular" />{" "}
                  </PrivateRoute>
                }
              />
              <Route
                path="/toprated"
                element={
                  <PrivateRoute>
                    <Navbar />
                    <MovieListPage categoryTitle="Top Rated" apiEndpoint="top_rated" />
                  </PrivateRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
