import React, { useEffect } from "react";

type Props = {
  imgColor: number[] | null;
  currentImg: string | null;
};

function Overlay({ imgColor, currentImg }: Props) {
  //@ts-ignore
  const [red, green, blue] = imgColor;
  return (
    <>
      <img
        className="mainBackground"
        src={currentImg as string}
        crossOrigin="anonymous"
      ></img>
      <div
        className="mainOverlay"
        style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
      ></div>
    </>
  );
}

export default Overlay;
