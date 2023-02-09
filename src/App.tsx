import React, { useRef } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import List from "./Components/List/List";
import Movie from "./Components/Movie/Movie";
import Performer from "./Components/Performer/Performer";
import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <Nav></Nav>

      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
          <Route
            path="/profile/:username/play-list/:name"
            element={<List />}
          ></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
          <Route path="/performer/:id" element={<Performer />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
