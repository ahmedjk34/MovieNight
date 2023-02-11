import React, { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";
import { fetchDiscover, fetchPopular } from "../../API";
import { Movie } from "../../Types/Types";
import PopularMovie from "./PopularMovie";
import PopularMoviesHorizontal from "./PopularMoviesHorizontal";
import DiscoverMovies from "./DiscoverMovies";

const Main = () => {
  const popularMovies = useRef<Movie[] | null>(null);
  const discoverMovies = useRef<Movie[] | null>(null);
  useEffect(() => {
    (async function fetchData() {
      const popularMoviesResponse = await fetchPopular();
      popularMovies.current = popularMoviesResponse.results;
      const discoverMoviesResponse = await fetchDiscover();
      discoverMovies.current = discoverMoviesResponse.results;
      setTimeout(() => {
        setPageLoaded(true);
      }, 1000);
    })();
  }, []);
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const [imgColor, setImgColor] = useState<number[]>([0, 0, 0]);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  //@ts-ignore
  const colorThief = new ColorThief();
  function getImageColor(image: string) {
    if (image) {
      const img = document.createElement("img");
      img.width = 500;
      img.height = 500;
      img.src = image;
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        setImgColor(colorThief.getColor(img));
      };
    }
  }

  return pageLoaded ? (
    <div className="main">
      <Overlay imgColor={imgColor} currentImg={currentImg}></Overlay>
      <h2>
        Welcome back , <em>Ahmed</em>. Check the latest movies.
      </h2>
      <div className="latestMovies">
        {popularMovies.current?.slice(0, 4).map((movieData, index) => (
          <PopularMovie
            movieData={movieData}
            setCurrentImg={setCurrentImg}
            getImageColor={getImageColor}
            key={index}
          ></PopularMovie>
        ))}
      </div>
      <div className="trendingMovies">
        <h1>Trending Movies</h1>
        <div>
          {popularMovies.current?.slice(6, 8).map((e, index) => (
            <PopularMoviesHorizontal
              movieData={e}
              key={`hor${index}`}
            ></PopularMoviesHorizontal>
          ))}
        </div>
      </div>
      <DiscoverMovies
        movies={discoverMovies.current?.slice(0, 10) ?? null}
      ></DiscoverMovies>
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Main;
