import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { apiMovies } from "../../utils/axios";
import { Movie } from "../../types";

const Popular = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    apiMovies
      .get("/movie/popular")
      .then((response) => setMovies(response.data.results));
  }, []);
  return (
    <Layout>
      <ul>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export { Popular };
