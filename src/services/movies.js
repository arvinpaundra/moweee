import axios from 'axios';

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

export const getTrendingMoviesAPI = async (time_window) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/trending/movie/${time_window}?api_key=${REACT_APP_API_KEY}`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results;
  } catch (err) {
    console.log(err);
  }
};

export const getNowPlayingMoviesAPI = async () => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results;
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMoviesAPI = async () => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedMoviesAPI = async () => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailMovieAPI = async (id) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`,
    );
    const axiosResponse = response.data;

    return axiosResponse;
  } catch (err) {
    console.log(err);
  }
};

export const getRecommendationMoviesAPI = async (id) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/${id}/recommendations?api_key=${REACT_APP_API_KEY}&language=en-US`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results;
  } catch (err) {
    console.log(err);
  }
};

export const getCastsMovieAPI = async (id) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/${id}/credits?api_key=${REACT_APP_API_KEY}&language=en-US`,
    );
    const axiosResponse = response.data;

    return axiosResponse.cast;
  } catch (err) {
    console.log(err);
  }
};

export const getSearchMoviesAPI = async (query) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTrailerMovieAPI = async (id) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/${id}/videos?api_key=${REACT_APP_API_KEY}&language=en-US`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results;
  } catch (err) {
    console.log(err);
  }
};

export const getWatchProvidersAPI = async (id) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/${id}/watch/providers?api_key=${REACT_APP_API_KEY}`,
    );
    const axiosResponse = response.data;

    return axiosResponse.results.ID;
  } catch (err) {
    console.log(err);
  }
};

export const getKeywordsAPI = async (id) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_URL}/movie/${id}/keywords?api_key=${REACT_APP_API_KEY}`,
    );
    const axiosResponse = response.data;

    return axiosResponse.keywords;
  } catch (err) {
    console.log(err);
  }
};
