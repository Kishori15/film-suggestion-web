const API_KEY = "0da56d7ff612d2eff268e369db892ae6";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const reponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await reponse.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
