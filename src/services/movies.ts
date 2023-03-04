import { useState } from "react";
import { Movie } from "../types";
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

const getVideo = async (id: string) => {
  const response = await apiMovies.get(`movie/${id}/videos`);

  return response.data;
};

const getById = async (id: string) => {
  const response = await apiMovies.get(`movie/${id}`);

  return response.data;
};
export const servicesMovies = { get, search, getById, getVideo };

//necesito el condicional por si la movie no cuenta con video disponible, muestra el primer video disponible

// const [trailer, setTrailer] = useState(null)

// if(data.videos && data.videos.results){
//   const trailer = data.videos.results.find(
//     (v) => v.name === "Oficial Trailer"
//   );
//   setTrailer(trailer ? trailer : data.videos.results[0])
// }
// setMovie(data)

// if (results.lenght){
// await getVideo(results[0].id)
// }
// Envía como parámetro el primer id que encuentra
