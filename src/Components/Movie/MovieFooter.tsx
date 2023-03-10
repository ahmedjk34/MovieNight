import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSimilarMovies, fetchVideos } from "../../API";
import { Cast, Crew, Movie } from "../../Types/Types";
import CastCard from "./CastCard";
import MovieCard from "./MovieCard";
import Trailer from "./Trailer";

type Props = {
  movieData: Movie | null | undefined;
  crew: Crew[] | null;
  cast: Cast[] | null;
};

function MovieFooter({ movieData, crew, cast }: Props) {
  const [videos, setVideos] = useState<{ key: string } | null>(null);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[] | null>(
    null
  );
  useEffect(() => {
    (async function fetchData() {
      const videosResponse = await fetchVideos(movieData?.id.toString());
      setVideos(
        videosResponse.results
          .filter((video: any) => video.type === "Trailer")
          .splice(0, 1)[0]
      );
      const rec = await fetchSimilarMovies(movieData?.id.toString());
      setRecommendedMovies(rec.results.splice(0, 4));
    })();
  }, []);
  return (
    <div className="movieFooter">
      <div className="storyLine">
        <h2>StoryLine </h2>
        <p>{movieData?.overview}</p>
      </div>
      <div className="cast">
        <h2>Cast</h2>
        {cast?.slice(0, 8).map((castMember) => (
          <CastCard cast={castMember}></CastCard>
        ))}
      </div>
      <div className="trailer">
        <h2>Trailer</h2>
        <Trailer embeddedId={videos?.key ?? "NOVIDEO"}></Trailer>
      </div>
      <div className="similar">
        <h2>Similar Movies</h2>
        <div className="movieCards">
          {recommendedMovies?.map((movie: Movie, index: number) => (
            <MovieCard movieData={movie} key={index}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieFooter;
