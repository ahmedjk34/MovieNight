import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, getMovieDetails, getTrailer } from "../../API";
import styles from "../../styles/pages/movie.module.scss";
import { Cast, Movie } from "../../Types";
import "react-circular-progressbar/dist/styles.css";
import { getDirector } from "./Utility";
import MainSection from "./MainSection";
import SupplementarySection from "./SupplementarySection";
type Props = {};

function Movie({}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<{ cast: Cast[]; crew: Cast[] } | null>(null);
  const [trailer, setTrailer] = useState<String | Boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const director = getDirector(cast);
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const movieResponse = await getMovieDetails(Number(id));
      setMovie(movieResponse);
      const castResponse = await getMovieCast(Number(id));
      setCast(castResponse);
      const trailerResponse = await getTrailer(Number(id));
      setTrailer(trailerResponse);
      setIsLoading(false);
    })();
  }, [id]);
  return (
    <div className={styles.moviePage}>
      <img
        className={styles.backgroundImage}
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      ></img>
      <MainSection movie={movie} director={director} isLoading={isLoading} />
      <SupplementarySection
        movie={movie}
        trailer={trailer}
        cast={cast}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Movie;
