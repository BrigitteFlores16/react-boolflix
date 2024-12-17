import React, { useState } from "react";

const apikey = import.meta.env.VITE_THEMOVIEDB_API_KEY;

export default function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apikey}&include_adult=false&language=en-US&page=1`;
    const serietvUrl = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${apikey}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDk1MTQxZDQxMzkwYmFlYjUxYmJjODNkOTA4ZmJlMSIsIm5iZiI6MTczNDM1NzAxOC4zOTM5OTk4LCJzdWIiOiI2NzYwMzAxYTViZDY2YTVlNTgxMzE1NWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8ETc1LYZo8UPiLQDUDuOYRUD3JV-5uFVciRiboRuFgc",
      },
    };

    Promise.all([
      fetch(movieUrl, options).then((res) => res.json()),
      fetch(serietvUrl, options).then((res) => res.json()),
    ])
      .then(([movieData, serietvData]) => {
        const movieResults = movieData.results.map((movie) => ({
          ...movie,
          type: "movie",
          poster: movie.poster_path,
          lang: movie.original_language,
          vote: movie.vote_average,
          title: movie.title,
          original_title: movie.original_title,
        }));

        const serietvResults = serietvData.results.map((serietv) => ({
          ...serietv,
          type: "serietv",
          poster: serietv.poster_path,
          lang: serietv.original_language,
          vote: serietv.vote_average,
          title: serietv.name,
          original_title: serietv.original_name,
        }));

        const combinedResults = [...movieResults, ...serietvResults];
        handleSearch(combinedResults);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex">
      <select className="form-select me-2">
        <option>Tutti i generi</option>
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
      <button className="btn btn-danger" onClick={handleSearchClick}>
        Cerca
      </button>
    </div>
  );
}
