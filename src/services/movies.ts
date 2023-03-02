import { apiMovies } from "../utils/axios";

const get = async (endpoint: string, page?: string) => {
  const response = await apiMovies.get(endpoint);

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

export const servicesMovies = { get, search };
