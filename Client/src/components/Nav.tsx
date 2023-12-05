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
type Props = {};

function Nav({}: Props) {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
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
      <AiOutlineUser
        size={28}
        color={"white"}
        onClick={() => {
          isAuthenticated
            ? navigation(`/profile/${getUserId(user)}`)
            : loginWithRedirect();
        }}
      />
    </div>
  );
}

export default Nav;
