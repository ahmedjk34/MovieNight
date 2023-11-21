import axios from "axios";

const API_KEY = "15dcc523002365590c4aab54ede321b0";
export async function getPopularMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results.slice(0, 4);
}
