import React, { useRef } from "react";
import { useState } from "react";
import Overlay from "./Overlay";

type Props = {};

const Main = (props: Props) => {
  const [currentImg, setCurrentImg] = useState(
    "https://image.tmdb.org/t/p/w500/fygeMr16EcxJiYhdiO1LEr7iHtI.jpg"
  );
  const imgRef = useRef<HTMLImageElement | null>(null);
  //@ts-ignore
  const colorThief = new ColorThief();
  let imgColor: number[] = [0, 0, 0];
  function getImageColor(img: HTMLImageElement) {
    imgColor = colorThief.getColor(img);
    console.log(imgColor);
  }
  return (
    <div className="main">
      <Overlay imgColor={imgColor}></Overlay>
      <img
        ref={imgRef}
        className="mainBackground"
        src={currentImg}
        crossOrigin="anonymous"
        onLoad={(e) => {
          getImageColor(e.target);
        }}
      ></img>
      <h2>
        Welcome back , <em>Ahmed</em>. Check the latest movies.
      </h2>
      <div className="latestMovies">
        <div className="newMovie">
          <img
            onMouseEnter={(e) => getImageColor(e.target)}
            src="https://image.tmdb.org/t/p/w500/fygeMr16EcxJiYhdiO1LEr7iHtI.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
