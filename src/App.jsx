import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = (results) => {
    setMovies(results);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Main movies={movies} />
    </div>
  );
}
