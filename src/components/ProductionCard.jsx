import React, { useState } from "react";

const getFlagUrl = (languageCode) => {
  const flagMap = {
    EN: "GB",
    HI: "IN",
    JA: "JP",
    KO: "KR",
    JV: "ID",
  };

  const upperCaseLanguageCode = languageCode ? languageCode.toUpperCase() : "";
  const countryCode =
    flagMap[upperCaseLanguageCode] || upperCaseLanguageCode || "US";
  return `https://flagsapi.com/${countryCode}/flat/64.png`;
};

const getPosterUrl = (posterPath) => {
  return `https://image.tmdb.org/t/p/w342/${posterPath}`;
};

const getStarRating = (voteAverage) => {
  const rating = Math.ceil(voteAverage / 2);
  return Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa ${index < rating ? "fa-star" : "fa-star-o"}`}
    ></i>
  ));
};

export default function ProductionCard({ movie }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card mb-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={getPosterUrl(movie.poster)}
        className="card-img-top"
        alt={movie.title}
      />
      {hover && (
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle mb-2">{movie.original_title}</h6>
          <p className="card-text">
            Lingua:
            <img src={getFlagUrl(movie.lang)} alt={movie.lang} />
          </p>
          <p className="card-text ">Voto: {getStarRating(movie.vote)}</p>
          <p className="card-text ">{movie.overview}</p>
        </div>
      )}
    </div>
  );
}
