import React from "react";

type Props = {
  movieImg: string;
};

function MovieSlide({ movieImg }: Props) {
  return (
    <div
      className="movieSlide"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieImg})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      }}
    ></div>
  );
}

export default MovieSlide;
