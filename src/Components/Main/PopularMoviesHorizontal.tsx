import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../Types/Types";
type Props = {
  movieData: Movie;
};

function PopularMoviesHorizontal({ movieData }: Props) {
  const navigation = useNavigate();
  return (
    <div
      className="popularMovieHorizontal"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
      }}
      onClick={(e) => navigation(`/movie/${movieData.id}`)}
    >
      <span>{movieData.title}</span>
    </div>
  );
}

export default PopularMoviesHorizontal;
