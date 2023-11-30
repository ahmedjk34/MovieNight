import { Movie } from "../../Types";
import styles from "../../styles/pages/main.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  movie: Movie;
};

function TodaysChoiceMovie({ movie: movie }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.movie}
      onClick={() => navigate(`/movie/${movie?.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      ></img>
      <div className={styles.infoOverlay}>{movie.title}</div>
    </div>
  );
}

export default TodaysChoiceMovie;
