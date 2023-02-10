import React from "react";
import { Movie } from "../../Types/Types";
type Props = {
  movieData: Movie;
};

function PopularMoviesHorizontal({ movieData }: Props) {
  return (
    <div
      className="popularMovieHorizontal"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
      }}
    >
      <span>{movieData.title}</span>
    </div>
  );
}

export default PopularMoviesHorizontal;
