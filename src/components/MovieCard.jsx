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

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
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
        <p className="card-text">Voto:{movie.vote_average}</p>
      </div>
    </div>
  );
}
