import React from "react";
import { Cast } from "../../Types/Types";
import { useNavigate } from "react-router-dom";
type Props = {
  cast: Cast;
};

function CastCard({ cast }: Props) {
  const navigation = useNavigate();

  return (
    <div
      className="castCard"
      onClick={(e) => navigation(`/performer/${cast.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
      ></img>
      <h3>{cast.name}</h3>
    </div>
  );
}

export default CastCard;
