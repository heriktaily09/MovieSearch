import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
export default function MovieList({ data }) {
  const { movieApiResponse, error, isError } = data;
  if (isError) {
    return <h1 className={`${styles.movieresError}`}>{error}</h1>;
  }
  if (movieApiResponse && movieApiResponse.Response === "False") {
    return (
      <h1 className={`${styles.movieresError}`}>
        {movieApiResponse.Error || "No result found"}
      </h1>
    );
  }
  return (
    <div className={`container ${styles.moviesList}`}>
      {movieApiResponse.Search.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
