import Rating from "../Rating";
import { getDuration } from "../Utility";
import styles from "../../styles/pages/movie.module.scss";
import { Cast, Movie } from "../../Types";
import { useLayoutEffect } from "react";

type Props = {
  movie: Movie | null;
  director: Cast | null;
  isLoading: Boolean;
};

function MainSection({ movie, director, isLoading }: Props) {
  useLayoutEffect(() => {
    const genres = document.querySelector(
      `.${styles.genres} `
    ) as HTMLDivElement;
    if (genres == null) return;
    for (const genre of genres.children as any) {
      genre.addEventListener("mousemove", (e: MouseEvent) => {
        const { x, y } = genre.getBoundingClientRect();
        genre.style.setProperty("--x", e.clientX - x);
        genre.style.setProperty("--y", e.clientY - y);
      });
    }
  }, [isLoading]);
  return (
    <div className={styles.mainSection}>
      <div className={styles.poster}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        ></img>
      </div>
      <div>
        <h1>{movie?.title}</h1>
        <div className={styles.genres}>
          {movie?.genres?.map((genre, index) => (
            <button className={styles.genre} key={`${genre.name} + ${index}`}>
              {genre.name}
            </button>
          ))}
        </div>
        <div className={styles.infoSection}>
          <h2 className={styles.info}>
            <span>Release Date: </span>
            <div>{`${movie?.release_date}`}</div>
          </h2>
          <h2 className={styles.info}>
            <span>Directed By: </span>
            <div> {director?.name ?? "Unknown"}</div>
          </h2>
          {getDuration(movie?.runtime ?? 0)}
        </div>
      </div>
      <div className={styles.votes}>
        <Rating value={Number(movie?.vote_average.toPrecision(2)) ?? 0} />
        <h2>
          {movie?.vote_count} <span>Total Votes</span>
        </h2>
      </div>
    </div>
  );
}

export default MainSection;
