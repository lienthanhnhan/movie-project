import movieApiService from './movieApiService';

const NOW_PLAYING_ENDPOINT = '/movie/now_playing';
const TOP_RATED_ENDPOINT = '/movie/top_rated';
const SEARCH_ENDPOINT = '/search/movie';
const MOVIE_DETAILS_ENDPOINT = '/movie';

const POSTER_PATH_ENDPOINT = 'https://image.tmdb.org/t/p/w300';
const POSTER_PATH_DEFAULT = './images/default-poster.jpeg';


const getNowPlayingMovies = async () => {
  try {
    const response: MoviesResponse = await movieApiService.get(NOW_PLAYING_ENDPOINT);
    return response;
  } catch (error) {
    throw error;
  }
};

const getTopRatedMovies = async () => {
  try {
    const response: MoviesResponse = await movieApiService.get(TOP_RATED_ENDPOINT);
    return response;
  } catch (error) {
    throw error;
  }
};

const searchMovies = async (query: string) => {
  try {
    const response: MoviesResponse = await movieApiService.get(SEARCH_ENDPOINT, {
      params: {
        query,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const getMovieDetails = async (movieId: string) => {
  try {
    const response: MovieDetailsResponse = await movieApiService.get(`${MOVIE_DETAILS_ENDPOINT}/${movieId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

const getPosterPath = (posterPath: string) => {
  if (posterPath) {
    return `${POSTER_PATH_ENDPOINT}/${posterPath}`;
  }
  return POSTER_PATH_DEFAULT;
}

export { getNowPlayingMovies, getTopRatedMovies, searchMovies, getMovieDetails, getPosterPath };
