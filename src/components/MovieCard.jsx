import React from "react";

const getFlagUrl = (languageCode) => {
  const flagMap = {
    EN: "GB",
    HI: "IN",
    JA: "JP",
    KO: "KR",
    JV: "ID",
  };

  const upperCaseLanguageCode = languageCode.toUpperCase();
  const countryCode = flagMap[upperCaseLanguageCode] || upperCaseLanguageCode;
  return `https://flagsapi.com/${countryCode}/flat/64.png`;
};

const getPosterUrl = (posterPath) => {
  let img = `https://image.tmdb.org/t/p/w342/${posterPath}`;

  return img;
};

const getStarRating = (voteAverage) => {
  const rating = Math.ceil(voteAverage / 2);
  <span className="material-symbols-outlined">star</span>;
  return Array.from({ length: 5 }, (_, index) => (
    <i key={index} className={`fa fa-star`}></i>
  ));
};

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={getPosterUrl(movie.poster_path)}
            className="img-fluid rounded-start"
            alt={movie.title || movie.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{movie.title || movie.name}</h2>
            <h3 className="card-subtitle mb-2 text-muted">
              {movie.original_title || movie.original_name}
            </h3>
            <p className="card-text">
              Lingua:{" "}
              <img
                src={getFlagUrl(movie.original_language)}
                alt={movie.original_language}
              />
            </p>
            <p className="card-text">
              Voto:
              {getStarRating(movie.vote_average)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
