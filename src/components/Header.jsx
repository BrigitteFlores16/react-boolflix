import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const apikey = import.meta.env.VITE_THEMOVIEDB_API_KEY;
export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apikey}&include_adult=false&language=en-US&page=1`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => onSearch(json.results))
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
            placeholder="Cerca un film..."
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
