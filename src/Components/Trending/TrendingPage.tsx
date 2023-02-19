import React, { useEffect, useMemo, useRef, useState } from "react";
import { fetchTrending, getRandomNumber } from "../../API";
import { Movie } from "../../Types/Types";
import MovieCard from "../Movie/MovieCard";
type Props = {};
function TrendingPage({}: Props) {
  const initalPageNumber = useMemo<number>(() => {
    return getRandomNumber(100, 1);
  }, []);
  const [pageNumber, setPageNumber] = useState<number>(initalPageNumber);
  const movies = useRef<Movie[] | null>(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    (async function fetchData() {
      setPageLoaded(false);
      const data = await fetchTrending(pageNumber || 1);
      movies.current = data.results;
      setPageLoaded(true);
    })();
  }, [pageNumber]);
  return pageLoaded ? (
    <div className="trendingPage">
      <div className="overlay"></div>
      <div className="movies">
        {movies.current?.slice(0, 16).map((e, index) => (
          <MovieCard movieData={e} key={index}></MovieCard>
        ))}
      </div>

      <div className="pages">
        <button onClick={(e) => setPageNumber(initalPageNumber)}>1</button>
        <button onClick={(e) => setPageNumber(initalPageNumber + 1)}>2</button>
        <button onClick={(e) => setPageNumber(initalPageNumber + 2)}>3</button>
        <button onClick={(e) => setPageNumber(initalPageNumber + 3)}>4</button>
        <button onClick={(e) => setPageNumber(initalPageNumber + 4)}>5</button>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default TrendingPage;
