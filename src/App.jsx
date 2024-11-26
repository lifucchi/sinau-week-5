import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MoviePage from "./pages/MoviePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-600 to-black opacity-90">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen px-4 bg-gradient-to-b from-gray-600 to-black opacity-90">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 font-bold text-center font-sans text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-8">5movies</h1>{" "}
        <div className=" w-full p-8 rounded-lg shadow-md mb-8">
          <SearchBar />
        </div>
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

        <div id="upcoming">
          <MoviePage categoryTitle="Upcoming" apiEndpoint="upcoming" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
