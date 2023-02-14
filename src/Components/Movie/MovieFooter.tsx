import React, { useEffect, useState } from "react";
import { fetchVideos } from "../../API";
import { Cast, Crew, Movie } from "../../Types/Types";
import Trailer from "./Trailer";

type Props = {
  movieData: Movie | null | undefined;
  crew: Crew[] | null;
  cast?: Cast[] | null;
};

function MovieFooter({ movieData, crew }: Props) {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    (async function fetchData() {
      const videosResponse = await fetchVideos(movieData?.id.toString());
      setVideos(
        videosResponse.results
          .filter((video: any) => video.type === "Trailer")
          .splice(0, 1)[0]
      );
    })();
  }, []);
  return (
    <div className="movieFooter">
      <div className="storyLine">
        <h2>StoryLine </h2>
        <p>{movieData?.overview}</p>
      </div>
      <div className="cast"></div>
      <div className="trailer">
        <h2>Trailer</h2>
        <Trailer embeddedId={videos?.key ?? "NOVIDEO"}></Trailer>
      </div>
      <div className="similar">
        <h2>Similar Movies</h2>
      </div>
    </div>
  );
}

export default MovieFooter;
