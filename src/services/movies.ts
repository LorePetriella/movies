import { apiMovies } from "../utils/axios";

const get = async (endpoint: string, page?: string) => {
  const response = await apiMovies.get(endpoint, {
    params: {
      page: page,
    },
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

const getById = async (id: string) => {
  const response = await apiMovies.get(`movie/${id}`);

  return response.data;
};
export const servicesMovies = { get, search, getById };
