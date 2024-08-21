import { Movie } from "../../Types";
import styles from "../../styles/pages/main.module.scss";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  function handleIsActive() {
    if (prev) return "prev";
    else if (current) return "current";
    else if (next) return "next";
    else return "inactive";
  }
  return (
    <div
      className={styles.movie}
      data-active={handleIsActive()}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      ></img>
      <div>{movie.title}</div>
    </div>
  );
}

export default DiscoverMovie;
