import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { getMovieDetails } from "../../API";
import styles from "../../styles/pages/main.module.scss";
import { Movie } from "../../Types";

type Props = {
  movie: Movie | null;
  index: Number;
};

function TrendingMovie({ movie: movie, index: index }: Props) {
  const backgroundImg = useRef<HTMLImageElement>(null);
  const [movieInfo, setMovieInfo] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const movieInfoResponse = (await getMovieDetails(movie?.id)) as Movie;
        setMovieInfo(movieInfoResponse);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  function handleActivity() {
    const currentActiveImage = document.querySelector(
      `.${styles.backgroundImg}.${styles.active}`
    );
    currentActiveImage?.classList.remove(`${styles.active}`);
    backgroundImg.current?.classList.add(`${styles.active}`);
  }
  return (
    <div className={styles.movie} onMouseEnter={() => handleActivity()}>
      {/*//? NoteI used !index for initial load*/}
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        className={`${styles.backgroundImg} ${!index ? styles.active : ""}`}
        ref={backgroundImg}
      ></img>
      <div className={`${styles.movieCard}`}>
        <img
          className={styles.moviePoster}
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        ></img>
        <div className={styles.movieInfo}>
          <div className={styles.mainInfo}>
            <div>
              <h2>{movieInfo?.title}</h2>
              <h4>
                <span>Release Date: </span>
                {`${movieInfo?.release_date}`}
              </h4>
            </div>
          </div>
          <div>
            <h3>Genres:</h3>
            <div className={styles.genres}>
              {movieInfo?.genres.slice(0, 3).map((g, index) => (
                <div className={styles.genre} key={index + g.id}>
                  {g.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>Overview:</h3>
            <p>
              {(movieInfo?.overview.length ?? 0) <= 400
                ? movieInfo?.overview
                : `${movieInfo?.overview.slice(0, 400)}...`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingMovie;
