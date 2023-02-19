export function getRandomNumber(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const API_KEY = "15dcc523002365590c4aab54ede321b0";
const topRatedAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const discoverAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${getRandomNumber(
  20,
  1
)}&with_watch_monetization_types=flatrate`;
export async function fetchPopular() {
  const jsonData = await fetch(topRatedAPI);
  if (jsonData.ok) {
    return await jsonData.json();
  } else throw Error("Error happened fetching popular movies [in response]");
}
export async function fetchDiscover() {
  const jsonData = await fetch(discoverAPI);
  if (jsonData.ok) {
    return await jsonData.json();
  } else throw Error("Error happened fetching discover movies [in response]");
}
export async function fetchMovie(id: string | undefined) {
  if (!id) return; //id is undefined
  const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const jsonData = await fetch(movieAPI);
  if (jsonData.ok) {
    return await jsonData.json();
  } else throw Error("Error happened fetching the movie [in response]");
}
export async function fetchWorkers(id: string | undefined) {
  const workersAPI = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const jsonData = await fetch(workersAPI);
  if (jsonData.ok) {
    return await jsonData.json();
  } else throw Error("Error happened fetching the movie's crew [in response]");
}
export async function fetchVideos(id: string | undefined) {
  const videosAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const jsonData = await fetch(videosAPI);
  if (jsonData.ok) {
    return await jsonData.json();
  } else
    throw Error("Error happened fetching the movie's videos [in response]");
}
export async function fetchSimilarMovies(id: string | undefined) {
  const similarMoviesAPI = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  const jsonData = await fetch(similarMoviesAPI);
  if (jsonData.ok) {
    return await jsonData.json();
  } else
    throw Error(
      "Error happened fetching the movie's recommendation [in response]"
    );
}
export async function fetchTrending(pageNumber: number) {
  console.log(pageNumber);
  const trendingAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate&include_adult=false  `;
  const jsonData = await fetch(trendingAPI);
  if (jsonData.ok) {
    return await jsonData.json();
  } else throw Error("Error happened fetching trending [in response]");
}
