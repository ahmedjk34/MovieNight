import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../Types/Types";

type Props = {
  key: any;
  movieData: Movie;
};

function MovieCard({ movieData }: Props) {
  const navigation = useNavigate();
  return (
    <div
      className="popularMovie"
      onClick={(e) => {
        navigation(`/movie/${movieData.id}`);
        window.location.reload();
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
      ></img>
      <div className="overlay">
        <h2>{`${movieData.vote_average.toFixed(1)}/10⭐`}</h2>
        <h4>{movieData.title}</h4>
        <h3>Release Date: {movieData.release_date.slice(0, 4)}</h3>
        <p>{movieData.overview.slice(0, 120)}...</p>
      </div>
    </div>
  );
}

export default MovieCard;
