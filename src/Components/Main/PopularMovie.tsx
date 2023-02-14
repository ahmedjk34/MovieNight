import React from "react";
import { Movie } from "../../Types/Types";
import { useNavigate } from "react-router-dom";
type Props = {
  movieData: Movie;
  setCurrentImg: (e: any) => void;
  getImageColor: (e: any) => void;
};

function PopularMovie({ movieData, setCurrentImg, getImageColor }: Props) {
  const navigation = useNavigate();
  function handelHover() {
    const bg: HTMLImageElement = document.querySelector(
      ".mainBackground"
    ) as HTMLImageElement;
    bg.style.transition = "opacity 0.75s ease-in-out";
    bg.style.opacity = "0.4";

    setCurrentImg(
      `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
    );
    getImageColor(
      `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
    );
    setTimeout(() => {
      bg.style.opacity = "1";
    }, 750);
  }
  return (
    <div
      className="popularMovie"
      onMouseEnter={handelHover}
      onClick={(e) => navigation(`/movie/${movieData.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
      ></img>
      <div className="overlay">
        <h2>{`${movieData.vote_average}/10⭐`}</h2>
        <h4>{movieData.title}</h4>
        <h3>Release Date: {movieData.release_date.slice(0, 4)}</h3>
        <p>{movieData.overview.slice(0, 120)}...</p>
      </div>
    </div>
  );
}

export default PopularMovie;
