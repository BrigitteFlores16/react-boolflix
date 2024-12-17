import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    movies: [],
    series: [],
  });

  const fetchMovies = (term) => {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${
      import.meta.env.VITE_THEMOVIEDB_API_KEY
    }&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer TUO_TOKEN",
      },
    };

    fetch(movieUrl, options)
      .then((res) => res.json())
      .then((data) => {
        const normalizedData = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          lang: movie.original_language,
          vote: movie.vote_average,
          poster: movie.poster_path,
        }));
        setGlobalData((prevData) => ({
          ...prevData,
          movies: normalizedData,
        }));
      });
  };

  const fetchSeries = (term) => {
    const serietvUrl = `https://api.themoviedb.org/3/search/tv?query=${term}&api_key=${
      import.meta.env.VITE_THEMOVIEDB_API_KEY
    }&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer TUO_TOKEN",
      },
    };

    fetch(serietvUrl, options)
      .then((res) => res.json())
      .then((data) => {
        const normalizedData = data.results.map((serie) => ({
          id: serie.id,
          title: serie.name,
          original_title: serie.original_name,
          lang: serie.original_language,
          vote: serie.vote_average,
          poster: serie.poster_path,
        }));

        setGlobalData((prevData) => ({
          ...prevData,
          series: normalizedData,
        }));
      });
  };

  const value = {
    ...globalData,
    searchMovies: fetchMovies,
    searchSeries: fetchSeries,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
