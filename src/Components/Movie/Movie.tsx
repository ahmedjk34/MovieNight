import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie, fetchVideos, fetchWorkers } from "../../API";
import { Cast, Crew, Movie } from "../../Types/Types";
import MovieFooter from "./MovieFooter";
import MovieOverlay from "./MovieOverlay";

const styles = {
  title: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "10vw",
    marginTop: "1.5rem",
    padding: "1.5rem",
  },
};
type Props = {};

function Movie({}: Props) {
  const { id } = useParams();
  const movieData = useRef<Movie | null>();
  const movieCrew = useRef<Crew[] | null>(null);
  const moiveCast = useRef<Cast[] | null>(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [videos, setVideos] = useState(null);
  function getDirector(): Crew {
    const director = movieCrew.current?.filter(
      ({ job }) => job === "Director"
    ) ?? [{ name: "Unknown" }];
    //@ts-ignore
    return director[0];
  }
  function convertRuntime(): string {
    const inHours = ((movieData.current?.runtime as number) / 60)
      .toPrecision(3)
      .toString()
      .split(".");
    return `${inHours[0]}H ${((Number(inHours[1]) / 100) * 60).toPrecision(
      2
    )}M`;
  }
  useEffect(() => {
    (async function fetchData() {
      movieData.current = await fetchMovie(id);
      const workersResponse = await fetchWorkers(id);
      movieCrew.current = workersResponse.crew;
      moiveCast.current = workersResponse.cast;
      setPageLoaded(true);
    })();
  });
  return pageLoaded ? (
    <div className="moviePage">
      <MovieOverlay
        movieBackdrop={`https://image.tmdb.org/t/p/original/${movieData.current?.backdrop_path}`}
      ></MovieOverlay>
      <div className="moviePoster">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieData.current?.poster_path}`}
        ></img>
      </div>
      <h1 style={styles.title}>
        <span style={{ fontSize: "3.75rem" }}>{movieData.current?.title} </span>
        <span>{`${movieData.current?.vote_average.toFixed(1)}/10⭐`}</span>
      </h1>
      <h3 className="genres">
        {movieData.current?.genres?.slice(0, 4).map((genre, index) => (
          <div className="genre" key={`genre${index}`}>
            {genre.name}
          </div>
        ))}
      </h3>
      <div className="movieInfo">
        <div>
          <p>Directed By:</p>
          {getDirector().name}
        </div>
        <div>
          <p>Release Date:</p> {movieData.current?.release_date}
        </div>
        <div>
          <p>Duration:</p>
          {convertRuntime()}
        </div>
      </div>
      <MovieFooter
        movieData={movieData.current}
        crew={movieCrew.current}
        cast={moiveCast.current}
      ></MovieFooter>
    </div>
  ) : (
    <h1>"Loading...."</h1>
  );
}

export default Movie;
