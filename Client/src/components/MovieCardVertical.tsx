import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/movie-card-vertical.module.scss";
import { Genre, Movie } from "../Types";
import { getMovieGenres } from "./Utility";
import { v4 as uuidv4 } from "uuid";

type Props = {
  movie: Movie | null;
};
function MovieCardVertical({ movie }: Props) {
  const navigation = useNavigate();
  const [genres, setGenres] = useState<Genre[] | null>(null);
  useEffect(() => {
    (async function () {
      try {
        const genresResponse = await getMovieGenres(movie?.genre_ids);
        setGenres(genresResponse);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <div
        className={`${styles.movieCard}`}
        onClick={() => {
          window.scrollTo(0, 0);
          navigation(`/movie/${movie?.id}`);
        }}
      >
        <img
          className={styles.moviePoster}
          src={
            movie?.poster_path != null
              ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
              : "https://i.ibb.co/zmvS5Dg/New-Project.png"
          }
          alt={movie?.title}
        ></img>
        <div className={styles.movieInfo}>
          <div className={styles.mainInfo}>
            <div>
              <h2>{movie?.title}</h2>
              <h4>
                <span>Release Date: </span>
                {`${movie?.release_date}`}
              </h4>
            </div>
          </div>
          <div>
            <h3>Genres:</h3>
            <div className={styles.genres}>
              {genres?.slice(0, 3).map((g, index) => (
                <div
                  className={styles.genre}
                  key={uuidv4() + index + g.id + "MovieCard"}
                >
                  {g.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>Overview:</h3>
            <p>
              {(movie?.overview.length ?? 0) <= 400
                ? movie?.overview
                : `${movie?.overview.slice(0, 400)}...`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCardVertical;
