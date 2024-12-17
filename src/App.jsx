import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalContextProvider } from "./contexts/GlobalContext";
export default function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = (results) => {
    setMovies(results);
  };

  return (
    <div>
      <GlobalContextProvider>
        <Header onSearch={handleSearch} />
        <Main movies={movies} />
      </GlobalContextProvider>
    </div>
  );
}
