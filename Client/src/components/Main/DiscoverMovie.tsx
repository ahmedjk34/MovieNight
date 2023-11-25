import React from "react";
import { Movie } from "../../Types";
import styles from "../../styles/pages/main.module.scss";

type Props = {
  movie: Movie;
  prev: Boolean;
  current: Boolean;
  next: Boolean;
};
function DiscoverMovie({
  movie: movie,
  prev: prev,
  current: current,
  next: next,
}: Props) {
  function handleIsActive() {
    if (prev) return "prev";
    else if (current) return "current";
    else if (next) return "next";
    else return "inactive";
  }
  return (
    <div className={styles.movie} data-active={handleIsActive()}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      ></img>
      <div>{movie.title}</div>
    </div>
  );
}

export default DiscoverMovie;
