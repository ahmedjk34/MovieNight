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
          setCurrentImg(e.target);
          getImageColor(e.target);
        }}
        src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
      ></img>
    </div>
  );
}

export default PopularMovie;
