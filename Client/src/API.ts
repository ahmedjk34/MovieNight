import axios from "axios";

const API_KEY = "15dcc523002365590c4aab54ede321b0";
export async function getMainMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results.slice(0, 13);
}
export async function getGenreList(ids: Number[]) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list??api_key=${API_KEY}`
  );
  console.log(response.data.results);
}
export async function getMovieDetails(id: Number = 0) {
  const movieInfoResponse = await axios.get(`
  https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  return movieInfoResponse.data;
}
