import React, { useState } from "react";

const apikey = import.meta.env.VITE_THEMOVIEDB_API_KEY;
export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apikey}&include_adult=false&language=en-US&page=1`;
    const tvUrl = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${apikey}&include_adult=false&language=en-US&page=1`;

    Promise.all([
      fetch(movieUrl).then((res) => res.json()),
      fetch(tvUrl).then((res) => res.json()),
    ])
      .then(([movieData, tvData]) => {
        const combinedResults = [
          ...movieData.results.map((movie) => ({ ...movie, type: "movie" })),
          ...tvData.results.map((tv) => ({ ...tv, type: "tv" })),
        ];
        onSearch(combinedResults);
      })
      .catch((err) => console.error(err));
  };
  return (
    <header className="bg-dark text-light p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>BOOLFLIX</h1>
        <div className="d-flex">
          <select className="form-select me-2">
            <option>Tutti i generi</option>
            <option>Action & Adventure</option>
            <option>Animazione</option>
            <option>Commedia</option>
            <option>Crime</option>
            <option>Documentario</option>
            <option>Dramma</option>
            <option>Famiglia</option>
            <option>Kids</option>
            <option>Mistero</option>
            <option>News</option>
            <option>Reality</option>
            <option>Sci-Fi & Fantasy</option>
            <option>Soap</option>
            <option>Talk</option>
            <option>War & Politics</option>
            <option>Western</option>
            <option>Azione</option>
            <option>Avventura</option>
            <option>Fantasy</option>
          </select>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Scrivi qui..."
            value={query}
            onChange={handleInputChange}
          />
          <button className="btn btn-danger" onClick={handleSearch}>
            Cerca
          </button>
        </div>
      </div>
    </header>
  );
}
