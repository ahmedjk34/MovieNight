import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getDiscoverMovies, getGenreList } from "../../API";
import { Genre, Movie } from "../../Types";
import LoadingPage from "../LoadingPage";
import MovieCardVertical from "../MovieCardVertical";
import styles from "../../styles/pages/discover.module.scss";
import { VscSettings } from "react-icons/vsc";
import { v4 } from "uuid";

type Props = {};

function Discover({}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([0, 1, 2, 3, 4]);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [genresList, setGenresList] = useState<Genre[] | null>(null);
  const [filters, setFilters] = useState<Number[]>([]);
  const [applyFilters, setApplyFilters] = useState(0);
  const genresRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    (async function () {
      const { moviesResponse, pagesResponse } = await getDiscoverMovies(
        currentPage,
        filters
      );
      setTotalPages(pagesResponse);
      setMovies(moviesResponse);
      setIsLoading(false);
    })();
  }, [currentPage, applyFilters]);
  useEffect(() => {
    (async function () {
      const genresResponse = await getGenreList();
      setGenresList(genresResponse.genres);
    })();
  }, []);
  useLayoutEffect(() => {
    if (isLoading) return;
    const genres = document.querySelector(
      `.${styles.genres} `
    ) as HTMLDivElement;
    for (const genre of genres.children as any) {
      genre.addEventListener("mousemove", (e: MouseEvent) => {
        const { x, y } = genre.getBoundingClientRect();
        genre.style.setProperty("--x", e.clientX - x);
        genre.style.setProperty("--y", e.clientY - y);
      });
    }
  }, [genresList]);
  function handleFilterActivity(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const clickedElement = e.target as HTMLDivElement;
    if (clickedElement.classList.contains(`${styles.active}`)) {
      clickedElement.classList.remove(`${styles.active}`);
      genresRef.current?.classList.remove(`${styles.active}`);
    } else {
      clickedElement.classList.add(`${styles.active}`);
      genresRef.current?.classList.add(`${styles.active}`);
    }
  }
  function handleGenreActivity(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    genreId: Number
  ) {
    const clickedElement = e.target as HTMLDivElement;
    if (filters?.find((e) => e == genreId)) {
      setFilters((prev) => prev?.filter((genre) => genre !== genreId));
      clickedElement.classList.remove(`${styles.active}`);
    } else {
      setFilters((prev) => [...prev, genreId]);
      clickedElement.classList.add(`${styles.active}`);
    }
  }
  return (
    <>
      <LoadingPage isLoading={isLoading} />
      <div className={styles.discoverPage}>
        <div className={styles.genresHolder}>
          <div
            className={styles.filter}
            onClick={(e) => handleFilterActivity(e)}
          >
            <h3>
              Filters <VscSettings />
            </h3>
          </div>
          <div className={styles.genres} ref={genresRef}>
            {genresList?.map((genre) => (
              <div
                className={styles.genre}
                onClick={(e) => {
                  handleGenreActivity(e, genre.id);
                }}
                key={genre.name ?? 0 + genre.id}
              >
                {genre.name}
              </div>
            ))}
            <div
              className={styles.apply}
              onClick={() => {
                setIsLoading(true);
                setApplyFilters((prev) => prev + 1);
              }}
            >
              <h3>Apply Filters</h3>
            </div>
          </div>
        </div>
        <div className={styles.moviesSection}>
          {movies?.length ? (
            movies?.map((movie) => (
              <MovieCardVertical movie={movie} key={movie.title} />
            ))
          ) : (
            <div className={styles.unavailable}>
              <h1>No movies match these genres</h1>
            </div>
          )}
          <div className={styles.pagesHolder}>
            {totalPages.map((i) => (
              <div
                onClick={() => {
                  document.body.scrollTop = 0; // For Safari
                  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                  if (currentPage == i + 1) return;
                  setIsLoading(true);
                  setCurrentPage(i + 1);
                }}
                key={v4()}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
