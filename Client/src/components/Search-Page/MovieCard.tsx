import { useEffect, useState } from "react";
import { Genre, Movie } from "../../Types";
import styles from "../../styles/pages/search.module.scss";
import { getMovieGenres } from "../Utility";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const navigation = useNavigate();

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
    <div
      className={styles.movie}
      onClick={() => navigation(`/movie/${movie?.id}`)}
    >
      <img
        src={
          movie?.poster_path != null
            ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
            : "https://i.ibb.co/zmvS5Dg/New-Project.png"
        }
      ></img>
      <div className={styles.info}>
        <h1>{movie.title}</h1>
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
        <h2>Story:</h2>
        <p>{movie.overview}</p>
        <h3>
          <>
            <span>Release Date: </span> {movie.release_date}
          </>
        </h3>
        <button>Watch Now</button>
      </div>
    </div>
  );
}

export default MovieCard;
