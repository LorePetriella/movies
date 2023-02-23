import { apiMovies } from "../utils/axios";

const get = async (endpoint: string) => {
  const response = await apiMovies.get(endpoint);

  return response.data;
};

export const servicesMovies = { get };
