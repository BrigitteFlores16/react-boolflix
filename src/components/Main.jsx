import React from "react";
import MovieList from "./MovieList";

export default function Main({ movies }) {
  return (
    <main className="container mt-4">
      <MovieList movies={movies} />
    </main>
  );
}
