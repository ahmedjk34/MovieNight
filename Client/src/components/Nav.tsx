import {
  AiOutlineFire,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

import styles from "../styles/pages/nav.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserId } from "./Utility";
import axios from "axios";
type Props = {};

function Nav({}: Props) {
  const { isAuthenticated, user, loginWithRedirect, loginWithPopup } =
    useAuth0();
  const navigation = useNavigate();

  async function handleLogin() {
    await loginWithPopup();
    axios.post("https://localhost3000/user", {
      userId: getUserId(user),
    });
  }

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
