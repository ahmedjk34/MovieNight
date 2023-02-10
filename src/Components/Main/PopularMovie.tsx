import React from "react";
import { Movie } from "../../Types/Types";

type Props = {
  movieData: Movie;
  setCurrentImg: (e: any) => void;
  getImageColor: (e: any) => void;
};

function PopularMovie({ movieData, setCurrentImg, getImageColor }: Props) {
  return (
    <div className="popularMovie">
      <img
        onMouseEnter={(e) => {
          setCurrentImg(
            `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
          );
          getImageColor(
            `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
          );
        }}
        src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
      ></img>
    </div>
  );
}

export default PopularMovie;
