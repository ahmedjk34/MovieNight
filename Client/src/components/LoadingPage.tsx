import { useEffect, useState } from "react";
import styles from "../styles/pages/loading-page.module.scss";
type Props = {
  isLoading: Boolean;
};

function LoadingPage({ isLoading }: Props) {
  const [zIndex, setZIndex] = useState(99);
  useEffect(() => {
    if (isLoading) {
      setZIndex(99);
      return;
    }
    setTimeout(() => setZIndex(-99), 750);
  }, [isLoading]);
  return (
    <div
      className={styles.loadingPage}
      style={{
        opacity: isLoading ? 1 : 0,
        zIndex,
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
