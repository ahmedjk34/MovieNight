import { useEffect, useState } from "react";
import styles from "../../styles/pages/search.module.scss";
import searchImg from "../../assets/searchPageImg.webp";
import { AiOutlineSearch } from "react-icons/ai";
import LoadingPage from "../LoadingPage";
import { getSearchResults } from "../../API";
import { Movie } from "../../Types";
import MovieCard from "./MovieCard";
import { v4 } from "uuid";
type Props = {};

function loadMoviesOnPage(movies: Movie[] | Boolean | null) {
  if (movies == null) return <></>;
  else if (movies == false) return <h1>{"No Results Found :("}</h1>;
  return (
    <>
      {/*@ts-ignore*/}
      {movies.map((movie) => (
        <MovieCard movie={movie} key={v4()} />
      ))}
    </>
  );
}

function Search({}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState(" ");
  const [movies, setMovies] = useState<Movie[] | Boolean | null>(null);
  //initial load , added a loading page for consistency
  useEffect(() => {
    setIsLoading(false);
  }, []);
  function handleSearch() {
    (async function () {
      const moviesResponse = await getSearchResults(input);
      setMovies(moviesResponse);
      setIsLoading(false);
    })();
  }

  return (
    <>
      <LoadingPage isLoading={isLoading} />
      <div className={styles.searchPage}>
        <div className={styles.mainSection}>
          <img
            src={searchImg}
            alt="Background img"
            className={styles.backgroundImg}
          ></img>
          <div>
            <h1>Search Page</h1>
            <div className={styles.searchBarHolder}>
              <input
                type="text"
                name="search"
                id={styles.searchBar}
                placeholder={"Enter The Name Of The Movie Here"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button>
                <AiOutlineSearch
                  size={25}
                  onClick={() => {
                    setIsLoading(true);
                    handleSearch();
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.moviesHolder}>{loadMoviesOnPage(movies)}</div>
      </div>
    </>
  );
}

export default Search;
