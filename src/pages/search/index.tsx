import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { Movie } from "../../types";
import { useSearchParams } from "react-router-dom";
import { servicesMovies } from "../../services/movies";
import "./styles.scss";
import { CardGroup } from "react-bootstrap";
import { MovieCard } from "../../components/common/card";

const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    const currentPage = searchParams.get("page");

    servicesMovies
      .search("/search/movie", {
        query: query || "",
        page: currentPage || "",
      })
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, [searchParams]);

  return (
    <Layout>
      holis
      <CardGroup>
        <MovieCard />
      </CardGroup>
    </Layout>
  );
};

export const Search = withAuth(SearchPage);
