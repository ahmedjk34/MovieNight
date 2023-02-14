import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../Types/Types";
type Props = {
  movie: Movie;
};

function MovieSlide({ movie }: Props) {
  const navigation = useNavigate();
  return (
    <div
      className="movieSlide"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      }}
      onClick={(e) => navigation(`/movie/${movie.id}`)}
    >
      <div className="overlay">
        <h2>{`${movie.vote_average}/10⭐`}</h2>
        <h1>{movie.title}</h1>
        <h3>Release Date: {movie.release_date.slice(0, 4)}</h3>
        <p>{movie.overview.slice(0, 400)}...</p>
      </div>
    </div>
  );
}

export default MovieSlide;
