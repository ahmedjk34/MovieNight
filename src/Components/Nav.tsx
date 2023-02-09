import React from "react";
import homeIcon from "../assets/homeIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import trendingIcon from "../assets/trendingIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import {
  AiOutlineFire,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";

function Nav() {
  return (
    <nav>
      <AiOutlineHome className="icon"></AiOutlineHome>
      <AiOutlineFire className="icon"></AiOutlineFire>
      <AiOutlineSearch className="icon"></AiOutlineSearch>
      <AiOutlineUser className="icon"></AiOutlineUser>
    </nav>
  );
}

export default Nav;
