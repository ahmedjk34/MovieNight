import { getGenreList } from "../API";
import styles from "../styles/pages/movie.module.scss";
import { Cast, Genre } from "../Types";

export function getDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours == 0)
    return (
      <h2 className={styles.info}>
        <span>Duration: </span>
        <div>{minutes}M</div>
      </h2>
    );
  else if (minutes == 0)
    return (
      <h2 className={styles.info}>
        <span>Duration: </span>
        <div>{hours}H</div>
      </h2>
    );
  else {
    return (
      <h2 className={styles.info}>
        <span>Duration: </span>
        <div>
          {hours}H {minutes}M
        </div>
      </h2>
    );
  }
}

export function getDirector(cast: any): Cast | null {
  if (cast == null) return null;
  //@ts-ignore
  return cast.crew.filter(({ job: job }) => job === "Director")[0];
}

export function createCastCard(cast: Cast, type: "Actor" | "Crew", key: Key) {
  return (
    <div className={styles.castMember} key={key}>
      <div>
        <img
          src={
            cast.profile_path != null
              ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
              : "https://i0.wp.com/www.zuckermanlaw.com/wp-content/uploads/whistleblowing/anonymous-sec-whistleblower.jpg?fit=1004%2C1045&ssl=1"
          }
        ></img>
      </div>
      <div className={styles.castInfo}>
        <h4>{cast.name}</h4>
        <span> {type == "Actor" ? cast.character : cast.job}</span>
      </div>
    </div>
  );
}
export async function getMovieGenres(ids: Number[] | undefined) {
  if (!ids) return;
  const genresList = await getGenreList();
  const movieGenres = genresList.genres.filter((genre: Genre) =>
    ids.includes(genre.id)
  );
  return movieGenres;
}
