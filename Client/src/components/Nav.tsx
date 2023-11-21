import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../API";
import {
  AiOutlineFire,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

import styles from "../styles/pages/nav.module.scss";
type Props = {};

function Nav({}: Props) {
  return (
    <div className={styles.nav}>
      <AiOutlineHome size={28} color={"white"} />
      <AiOutlineFire size={28} color={"white"} />
      <AiOutlineSearch size={28} color={"white"} />
      <AiOutlineUser size={28} color={"white"} />
    </div>
  );
}

export default Nav;
