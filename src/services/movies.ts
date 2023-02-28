import { apiMovies } from "../utils/axios";

const get = async (endpoint: string) => {
  const response = await apiMovies.get(endpoint);

  return response.data;
};

const search = async (
  endpoint: string,
  params: { query?: string; page?: string }
) => {
  const response = await apiMovies.get(endpoint, {
    params,
  });
  return response.data;
};

export const servicesMovies = { get, search };
