import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/pages/main.module.scss";
import { Movie } from "../../Types";
import MovieCardVertical from "../MovieCardVertical";

type Props = {
  movie: Movie | null;
  index: Number;
};

function TrendingMovie({ movie: movie, index: index }: Props) {
  const backgroundImg = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  function handleActivity() {
    const currentActiveImage = document.querySelector(
      `.${styles.backgroundImg}.${styles.active}`
    );
    currentActiveImage?.classList.remove(`${styles.active}`);
    backgroundImg.current?.classList.add(`${styles.active}`);
  }
  return (
    <div
      className={styles.movie}
      onMouseEnter={() => handleActivity()}
      onClick={() => navigate(`/movie/${movie?.id}`)}
    >
      {/*//? NoteI used !index for initial load*/}
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        className={`${styles.backgroundImg} ${!index ? styles.active : ""}`}
        ref={backgroundImg}
      ></img>
      <MovieCardVertical movie={movie}></MovieCardVertical>
    </div>
  );
}

export default TrendingMovie;
