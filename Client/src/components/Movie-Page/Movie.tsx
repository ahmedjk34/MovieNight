import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, getMovieDetails } from "../../API";
import styles from "../../styles/pages/movie.module.scss";
import { Cast, Movie } from "../../Types";
type Props = {};

function Movie({}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<Cast[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    (async function () {
      const movieResponse = await getMovieDetails(Number(id));
      setMovie(movieResponse);
      const castResponse = await getMovieCast(Number(id));
      setCast(castResponse);
    })();
  }, []);
  return (
    <div className={styles.moviePage}>
      <img
        className={styles.backgroundImage}
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      ></img>
      <div className={styles.mainSection}>
        <div className={styles.poster}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          ></img>
        </div>
        <div>
          <h1>{movie?.title}</h1>
          <div>
            <h3>
              <span>Release Date: </span>
              {`${movie?.release_date}`}
            </h3>
            <h3>
              <span>Directed By:{"TEST"} </span>
            </h3>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Movie;
