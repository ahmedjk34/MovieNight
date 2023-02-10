import React, { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";
import { fetchPopular } from "../../API";
import { Movie } from "../../Types/Types";
import PopularMovie from "./PopularMovie";

const Main = () => {
  const popularMovies = useRef<Movie[] | null>(null);
  useEffect(() => {
    (async function fetchData() {
      const popularMoviesResponse = await fetchPopular();
      popularMovies.current = popularMoviesResponse.results;
      setPageLoaded(true);
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
      console.log(img);
      img.crossOrigin = "Anonymous";
      setImgColor(colorThief.getColor(img));
    }
  }

  return pageLoaded ? (
    <div className="main">
      <Overlay imgColor={imgColor} currentImg={currentImg}></Overlay>
      <h2>
        Welcome back , <em>Ahmed</em>. Check the latest movies.
      </h2>
      <div className="latestMovies">
        {popularMovies.current?.slice(0, 4).map((movieData) => (
          <PopularMovie
            movieData={movieData}
            setCurrentImg={setCurrentImg}
            getImageColor={getImageColor}
          ></PopularMovie>
        ))}
      </div>
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Main;

{
  /* <div className="newMovie">
          <img
            onMouseEnter={(e) => {
              setCurrentImg(e.target);
              getImageColor(e.target);
            }}
            src="https://image.tmdb.org/t/p/w500/fygeMr16EcxJiYhdiO1LEr7iHtI.jpg"
          ></img>
        </div>
        <div className="newMovie">
          <img
            onMouseEnter={(e) => {
              setCurrentImg(e.target);
              getImageColor(e.target);
            }}
            src="https://image.tmdb.org/t/p/w780/oodPJ3Op1pWBhnEFyw5fampRCWf.jpg"
          ></img>
        </div> */
}
