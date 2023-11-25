import { useEffect, useState } from "react";
import { getPopularMovies } from "../../API";
import { Movie } from "../../Types";
import styles from "../../styles/pages/main.module.scss";
import TrendingMovie from "./TrendingMovie";
import TodaysChoiceMovie from "./TodaysChoiceMovie";

type Props = {};

function Main({}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState<Movie[] | null>(null);
  useEffect(() => {
    (async function () {
      //api calls
      const trendingMoviesResponse = (await getPopularMovies()) as Movie[];
      setTrendingMovies(trendingMoviesResponse);
      setIsLoading(false);
    })();
  }, []);
  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  return (
    <div className={styles.main}>
      <div className={styles.trendingMovies}>
        <h1>Welcome Back , Ahmed. Here's what people are watching.</h1>
        <div className={styles.moviesWrapper}>
          {trendingMovies?.slice(0, 4).map((movie, index) => (
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
          {trendingMovies?.slice(4).map((movie, index) => (
            <TodaysChoiceMovie movie={movie} key={`${index} TodaysChoice`} />
          ))}
        </div>
        <div className={styles.discover}>
          <h1>Discover</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
