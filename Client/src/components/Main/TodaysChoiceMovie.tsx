import React from "react";
import { Movie } from "../../Types";
import styles from "../../styles/pages/main.module.scss";

type Props = {
  movie: Movie;
};

function TodaysChoiceMovie({ movie: movie }: Props) {
  return (
    <div className={styles.movie}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      ></img>
      <div className={styles.infoOverlay}>{movie.title}</div>
    </div>
  );
}

export default TodaysChoiceMovie;
