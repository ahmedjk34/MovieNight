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
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigation = useNavigate();

  return (
    <nav>
      <AiOutlineHome
        className="icon"
        onClick={(e) => navigation("/")}
      ></AiOutlineHome>
      <AiOutlineFire className="icon"></AiOutlineFire>
      <AiOutlineSearch className="icon"></AiOutlineSearch>
      <AiOutlineUser className="icon"></AiOutlineUser>
    </nav>
  );
}

export default Nav;
