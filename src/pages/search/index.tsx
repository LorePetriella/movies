import { CustomButton, Layout } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { Movie } from "../../types";
import { useSearchParams } from "react-router-dom";
import { servicesMovies } from "../../services/movies";
import { Col, Container, Row } from "react-bootstrap";
import { MovieCard } from "../../components/common/card";
import { BASE_IMG } from "../../constants";
import "./styles.scss";

const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    servicesMovies
      .search({
        query: searchParams.get("query" || "" || null),
        // page: searchParams.get("page"),
      })
      .then((data) => {
        setMovies(data.results);
      });
  }, [searchParams]);

  return (
    <Layout>
      <Container className="p-4">
        <Row>
          {movies &&
            movies.map((movie) => (
              <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
                <MovieCard
                  title={movie.title}
                  img={`${BASE_IMG}${movie.poster_path}`}
                >
                  <CustomButton
                    variant={"dark"}
                    onClick={() => `/movies/${Number(movie.id)}`}
                    label={"Más Info"}
                  ></CustomButton>
                </MovieCard>
              </Col>
            ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const Search = withAuth(SearchPage);
