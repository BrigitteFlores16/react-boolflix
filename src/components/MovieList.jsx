import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div>
      {movies.length === 0 ? (
        <h3>Prova a cercare un film o una serie tv!</h3>
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
}
