import React from "react";

type Props = {
  imgColor: number[] | null;
};

function Overlay({ imgColor }: Props) {
  //@ts-ignore
  const [red, green, blue] = imgColor;

  return (
    <div
      className="mainOverlay"
      style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
    ></div>
  );
}

export default Overlay;
