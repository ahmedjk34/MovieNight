import React from "react";

type Props = {
  embeddedId: string;
};

function Trailer({ embeddedId }: Props) {
  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embeddedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{ aspectRatio: "16/9" }}
    />
  );
}

export default Trailer;
