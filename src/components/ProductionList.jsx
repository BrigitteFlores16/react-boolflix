import React from "react";
import ProductionCard from "./ProductionCard";

export default function ProductionList({ movies }) {
  const movieList = movies.filter((movie) => movie.type === "movie");
  const tvSeriesList = movies.filter((movie) => movie.type === "serietv");

  return (
    <div className="container">
      {movies.length === 0 ? (
        <div className="centered-container">
          <h3 className="centered-text">
            Prova a cercare un film o una serie tv!
          </h3>
        </div>
      ) : (
        <>
          {movieList.length > 0 && (
            <>
              <h2 className="section-title">Movies</h2>
              <div className="row">
                {movieList.map((movie) => (
                  <div
                    key={movie.id}
                    className="col-lg-3 col-md-4 col-sm-6 mb-3"
                  >
                    <ProductionCard movie={movie} />
                  </div>
                ))}
              </div>
            </>
          )}
          <hr />
          {tvSeriesList.length > 0 && (
            <>
              <h2 className="section-title">TV Series</h2>
              <div className="row">
                {tvSeriesList.map((movie) => (
                  <div
                    key={movie.id}
                    className="col-lg-3 col-md-4 col-sm-6 mb-3"
                  >
                    <ProductionCard movie={movie} />
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
