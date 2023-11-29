import { CircularProgressbar } from "react-circular-progressbar";

type Props = {
  value: number;
};

function Rating({ value: value }: Props) {
  const styling = {
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(218,165,32, ${value})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: "butt",
      // Customize transition animation
      transition: "stroke-dashoffset 0.5s ease 0s",
      // Rotate the path
      transformOrigin: "center center",
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: "#d6d6d6",
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: "butt",
      // Rotate the trail
      transform: "rotate(0.25turn)",
      transformOrigin: "center center",
    },
    // Customize the text
    text: {
      // Text color
      fill: "white",
      // Text size
      fontSize: "1rem",
      fontWeight: "900",
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: "#3e98c7",
    },
  };
  return (
    <>
      <CircularProgressbar
        value={value * 10}
        text={`${value} / 10`}
        styles={styling}
      />
    </>
  );
}

export default Rating;
