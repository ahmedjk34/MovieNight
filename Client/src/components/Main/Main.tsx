import { useEffect, useState } from "react";
import { getPopularMovies } from "../../API";
import { Movie } from "../../Types";
import styles from "../../styles/pages/main.module.scss";
import TrendingMovie from "./TrendingMovie";

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
    console.log(trendingMovies);
  }, [isLoading]);
  return (
    <div className={styles.main}>
      {trendingMovies?.map((movie) => (
        <TrendingMovie movie={movie} />
      ))}
    </div>
  );
}

export default Main;
