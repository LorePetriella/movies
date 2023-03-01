import { Layout, MovieCard } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BASE_IMG } from "../../constants";
import { Movie } from "../../types";
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
        <h2 className="text-center">Películas Populares</h2>
        <Row>
          {movies &&
            movies.map((movie) => (
              <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
                <MovieCard
                  title={movie.title}
                  img={`${BASE_IMG}${movie.poster_path}`}
                  id={movie.id}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const Popular = withAuth(PopularPage);
