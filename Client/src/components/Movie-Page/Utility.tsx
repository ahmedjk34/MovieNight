import styles from "../../styles/pages/movie.module.scss";
import { Cast } from "../../Types";

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
