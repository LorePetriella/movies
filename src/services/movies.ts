import { apiMovies } from "../utils/axios";

const getPopular = async (params: { page?: string }) => {
  const response = await apiMovies.get("/movie/popular", {
    params,
  });

  return response.data;
};

const getTopRated = async () => {
  const response = await apiMovies.get("/movie/top_rated");

  return response.data;
};

const getNowPlaying = async () => {
  const response = await apiMovies.get("/movie/now_playing");

  return response.data;
};

const getUpcoming = async (params: { page?: string }) => {
  const response = await apiMovies.get("/movie/upcoming", {
    params,
  });

  return response.data;
};

const search = async (params: {
  query: string | null;
  page?: string | null;
}) => {
  const response = await apiMovies.get("/search/movie", {
    params,
  });
  return response.data;
};

const getById = async (
  id: string,
  params?: {
    append_to_response?: string | null;
  }
) => {
  const response = await apiMovies.get(`movie/${id}`, {
    params,
  });

  return response.data;
};
export const servicesMovies = {
  search,
  getUpcoming,
  getById,
  getPopular,
  getNowPlaying,
  getTopRated,
};
