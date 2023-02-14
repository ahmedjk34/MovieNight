import React from "react";

type Props = {
  movieBackdrop: string | null;
};

function MovieOverlay({ movieBackdrop }: Props) {
  return (
    <div
      className="movieBackdrop"
      style={{ backgroundImage: `url(${movieBackdrop})` }}
    >
      <div className="overlay"></div>
    </div>
  );
}

export default MovieOverlay;
