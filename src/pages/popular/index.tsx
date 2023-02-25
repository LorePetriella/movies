import { SetStateAction, useEffect, useState } from "react";
import { Layout } from "../../components";
import { apiMovies } from "../../utils/axios";
import { Movie } from "../../types";
import { Col, Container, Row } from "react-bootstrap";
import { withAuth } from "../../hoc";
import React from "react";
const PopularPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    apiMovies
      .get("/movie/popular")
      .then((response: { data: { results: SetStateAction<Movie[]> } }) =>
        setMovies(response.data.results)
      );
  }, []);
  return (
    <Layout>
      <Container fluid className="p-4">
        <Row>
          {movies.map((movie) => (
            <Col sm={6} md={4} lg={3} className="mb-4">
              <li>{movie.title}</li>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const Popular = withAuth(PopularPage);
