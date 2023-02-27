import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Movie } from "../../types";
import { Col, Container, Row } from "react-bootstrap";
import { withAuth } from "../../hoc";
import React from "react";
import { servicesMovies } from "../../services/movies";

const PopularPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    servicesMovies
      .get("/movie/popular")
      .then((data) => setMovies(data.results));
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
