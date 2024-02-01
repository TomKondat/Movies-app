import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Footer from "./components/Footer";
import LikedPage from "./components/LikedPage";
import { useState } from "react";

function App() {
  const [likedMovies, setLikedMovies] = useState([]);
  const handleLike = (movie) => {
    setLikedMovies([...likedMovies, movie]);
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies handleLike={handleLike} />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route
          path="/likedpage"
          element={<LikedPage likedMovies={likedMovies} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
