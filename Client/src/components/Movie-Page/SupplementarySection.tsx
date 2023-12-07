import { Cast, Movie } from "../../Types";
import styles from "../../styles/pages/movie.module.scss";
import { createCastCard } from "../Utility";
import { useLayoutEffect } from "react";
import Reviews from "./Reviews";
import MovieCardVertical from "../MovieCardVertical";
import { v4 } from "uuid";

type Props = {
  movie: Movie | null;
  trailer: String | Boolean;
  cast: { cast: Cast[]; crew: Cast[] } | null;
  recommendations: Movie[] | null;
  isLoading: boolean;
};
function SupplementarySection({
  movie,
  trailer,
  cast,
  recommendations,
  isLoading,
}: Props) {
  useLayoutEffect(() => {
    const castHolder = document.querySelectorAll(
      `.${styles.castHolder} `
    ) as NodeListOf<HTMLDialogElement>;
    if (cast == null) return;
    castHolder.forEach((holder) => {
      for (const cast of holder.children as any) {
        cast.addEventListener("mousemove", (e: MouseEvent) => {
          const { x, y } = cast.getBoundingClientRect();
          cast.style.setProperty("--x", e.clientX - x);
          cast.style.setProperty("--y", e.clientY - y);
        });
      }
    });
  }, [isLoading]);
  return (
    <div className={styles.supplementarySection}>
      <div className={styles.plot}>
        <h2>Plot</h2>
        <p>{movie?.overview}</p>
      </div>
      <div className={styles.trailer}>
        <h2>Trailer</h2>
        {trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer}`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
          ></iframe>
        ) : (
          <div>There Is No Available Trailer</div>
        )}
      </div>
      <div className={styles.cast}>
        <div>
          <h2>Actors</h2>
          <div className={styles.castHolder}>
            {cast?.cast.slice(0, 5).map((actor, index) => (
              <>{createCastCard(actor, "Actor", `${index}Actor`)}</>
            ))}
          </div>
        </div>
        <div>
          <h2>Crew</h2>
          <div className={styles.castHolder}>
            {cast?.crew.slice(0, 5).map((actor) => (
              <>{createCastCard(actor, "Crew", v4())}</>
            ))}
          </div>
        </div>
      </div>
      {/*because the reviews section has a lot of logic -> make it's own component */}
      <Reviews />
      <div className={styles.recommendations}>
        <h2>Recommendations</h2>
        {recommendations?.length ? (
          <div>
            {recommendations?.map((movie) => (
              <MovieCardVertical movie={movie} key={v4()} />
            ))}
          </div>
        ) : (
          <h3>There isn't any recommendations currently</h3>
        )}
      </div>
    </div>
  );
}

export default SupplementarySection;
