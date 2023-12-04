import { useEffect, useState } from "react";
import styles from "../styles/pages/loading-page.module.scss";
type Props = {
  isLoading: Boolean;
};

function LoadingPage({ isLoading }: Props) {
  const [zIndex, setZIndex] = useState(99);
  const [transition, setTransition] = useState("opacity 1s ease-in-out");
  useEffect(() => {
    if (isLoading) {
      setZIndex(99);
      setTransition("opacity 1s ease-in-out");
      return;
    }
    setTimeout(() => {
      setZIndex(-99);
      setTransition("none");
    }, 1000);
  }, [isLoading]);
  return (
    <div
      className={styles.loadingPage}
      style={{
        opacity: isLoading ? 1 : 0,
        zIndex: zIndex,
        transition: transition,
      }}
    >
      <div className={styles.spinner}>
        Loading
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingPage;
