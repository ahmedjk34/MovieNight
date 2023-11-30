import { Route, Routes } from "react-router-dom";
import { getGenreList } from "./API";
import Discover from "./components/Discover-Page/Discover";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import Movie from "./components/Movie-Page/Movie";
import Nav from "./components/Nav";
import "./styles/pages/global-rules.scss";
type Props = {};

function App({}: Props) {
  getGenreList();
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Discover />} path="/discover" />
        <Route element={<Movie />} path="movie/:id" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
