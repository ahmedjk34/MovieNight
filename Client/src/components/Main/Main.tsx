import { useEffect, useState } from "react";
import { getMainMovies } from "../../API";
import { Movie } from "../../Types";
import styles from "../../styles/pages/main.module.scss";
import TrendingMovie from "./TrendingMovie";
import TodaysChoiceMovie from "./TodaysChoiceMovie";
import DiscoverMovie from "./DiscoverMovie";
import LoadingPage from "../LoadingPage";

type Props = {};

function Main({}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [activeSlides, setActiveSlides] = useState({
    prev: 2,
    current: 3,
    next: 4,
  });
  useEffect(() => {
    (async function () {
      //api calls
      const moviesResponse = (await getMainMovies()) as Movie[];
      setMovies(moviesResponse);
      setIsLoading(false);
    })();
  }, []);

  function handleArrows(action: "Next" | "Prev") {
    if (action == "Next") {
      setActiveSlides((prev) => ({
        prev: prev.prev + 1,
        current: prev.current + 1,
        next: prev.next + 1,
      }));
    } else {
      setActiveSlides((prev) => ({
        prev: prev.prev - 1,
        current: prev.current - 1,
        next: prev.next - 1,
      }));
    }
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.trendingMovies}>
          <h1>Welcome Back , Ahmed. Here's what people are watching.</h1>
          <div className={styles.moviesWrapper}>
            {movies?.slice(0, 4).map((movie, index) => (
              <TrendingMovie
                movie={movie}
                index={index}
                key={`${index} TrendingMovie`}
              />
            ))}
          </div>
        </div>
        <div className={styles.todaysChoices}>
          <h1>Today's Choice</h1>
          <div>
            {movies?.slice(4, 6).map((movie, index) => (
              <TodaysChoiceMovie movie={movie} key={`${index} TodaysChoice`} />
            ))}
          </div>
        </div>
        <div className={styles.discover}>
          <h1>Discover</h1>
          <div>
            {movies?.slice(6).map((movie, index) => (
              <DiscoverMovie
                movie={movie}
                prev={activeSlides.prev == index ? true : false}
                current={activeSlides.current == index ? true : false}
                next={activeSlides.next == index ? true : false}
                key={`${index} Discover`}
              />
            ))}
            <div
              className={`${styles.arrow} ${styles.right}`}
              onClick={() => handleArrows("Next")}
              style={{ display: activeSlides.next == 6 ? "none" : "block" }}
            >
              {">"}
            </div>
            <div
              className={`${styles.arrow} ${styles.left}`}
              onClick={() => handleArrows("Prev")}
              style={{ display: activeSlides.prev == 0 ? "none" : "block" }}
            >
              {"<"}
            </div>
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
      <LoadingPage isLoading={isLoading}></LoadingPage>
    </>
  );
}

export default Main;
