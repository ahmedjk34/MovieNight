import { Cast, Movie } from "../../Types";
import styles from "../../styles/pages/movie.module.scss";
import { createCastCard } from "./Utility";
import { useLayoutEffect } from "react";

type Props = {
  movie: Movie | null;
  trailer: String | Boolean;
  cast: { cast: Cast[]; crew: Cast[] } | null;
  isLoading: boolean;
};
function SupplementarySection({ movie, trailer, cast, isLoading }: Props) {
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
            {cast?.cast.slice(0, 5).map((actor) => (
              <>{createCastCard(actor, "Actor")}</>
            ))}
          </div>
        </div>
        <div>
          <h2>Crew</h2>
          <div className={styles.castHolder}>
            {cast?.crew.slice(0, 5).map((actor) => (
              <>{createCastCard(actor, "Crew")}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplementarySection;
