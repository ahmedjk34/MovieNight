import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, getMovieDetails } from "../../API";
import styles from "../../styles/pages/movie.module.scss";
import { Cast, Movie } from "../../Types";
import "react-circular-progressbar/dist/styles.css";

import { getDirector } from "./Utility";
import MainSection from "./MainSection";
type Props = {};

function Movie({}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<Cast[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const director = getDirector(cast);
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const movieResponse = await getMovieDetails(Number(id));
      setMovie(movieResponse);
      const castResponse = await getMovieCast(Number(id));
      setCast(castResponse);
      setIsLoading(false);
    })();
  }, []);
  return (
    <div className={styles.moviePage}>
      <img
        className={styles.backgroundImage}
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      ></img>
      {<MainSection movie={movie} director={director} isLoading={isLoading} />}
    </div>
  );
}

export default Movie;
