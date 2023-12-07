import axios from "axios";
const API_KEY = "15dcc523002365590c4aab54ede321b0";
export async function getMainMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results.slice(0, 13);
}
export async function getGenreList() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data;
}
export async function getMovieDetails(id: Number = 0) {
  const response = await axios.get(`
  https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}
export async function getMovieCast(id: Number = 0) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
}
export async function getTrailer(id: number): Promise<Boolean | String> {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  );
  if (response.data == []) return false;
  //@ts-ignore
  const trailerObject = response.data.results.filter(
    ({ type }: { type: string }) => type == "Teaser" || type == "Trailer"
  )[0];
  return trailerObject.key;
}
export async function getRecommendations(id: Number) {
  const response = await axios.get(
    `
    https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
  );
  return response.data.results.slice(0, 4);
}
export async function getDiscoverMovies(page: Number, genres: Number[]) {
  const genresList = genres.join(",") ?? "";
  const response = await axios.get(`
  https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=${genresList}`);
  const moviesResponse = response.data.results.slice(0, 16);
  const pagesResponse =
    response.data.total_pages > 5
      ? [0, 1, 2, 3, 4]
      : response.data.total_pages != 0
      ? Array.from(Array(response.data.total_pages).keys())
      : [];
  return { moviesResponse, pagesResponse };
}
export async function getSearchResults(input: String) {
  if (input == " ") return false;
  const query = input.split(" ").join("+");
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
  if (!response.data.results.length) return false;
  return response.data.results.slice(0, 5);
}
