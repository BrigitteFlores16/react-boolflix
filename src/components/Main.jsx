import React from "react";

export default function Main({ movies }) {
  return (
    <main className="container mt-4">
      {movies.map((movie) => (
        <div key={movie.id} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p className="card-text">Titolo: {movie.title}</p>
            <p className="card-text">
              Titolo originale: {movie.original_title}
            </p>
            <p className="card-text">Lingua: {movie.original_language}</p>
            <p className="card-text">Voto: {movie.vote_average}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
