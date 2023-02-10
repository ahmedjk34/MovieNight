const API_KEY = "15dcc523002365590c4aab54ede321b0";
const topRatedAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export async function fetchPopular() {
  const jsonData = await fetch(`${topRatedAPI}`, {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  if (jsonData.ok) {
    return await jsonData.json();
  } else throw Error("Error happened fetching popular movies [in response]");
}
