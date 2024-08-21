import { AiOutlineFire, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";

import styles from "../styles/pages/nav.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

function Nav({}: Props) {
  const navigation = useNavigate();

  return (
    <div className={styles.nav}>
      <AiOutlineHome
        size={28}
        color={"white"}
        onClick={() => navigation("/")}
      />
      <AiOutlineFire
        size={28}
        color={"white"}
        onClick={() => navigation("/discover")}
      />
      <AiOutlineSearch
        size={28}
        color={"white"}
        onClick={() => navigation("/search")}
      />
    </div>
  );
}

export default Nav;
