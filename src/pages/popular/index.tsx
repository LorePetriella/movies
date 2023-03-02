import { Layout, MovieCard, PageSelector } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BASE_IMG } from "../../constants";
import { Movie } from "../../types";
import { servicesMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

const PopularPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    servicesMovies
      .get("/movie/popular")
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Layout>
      <Container className="p-4">
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
        <Row className="d-flex justify-content-center ">
          <Col sm={3}>
            <PageSelector
              page={""}
              totalPages={""}
              first={function (): void {
                throw new Error("Function not implemented.");
              }}
              next={function (page: string | null): void {
                throw new Error("Function not implemented.");
              }}
              prev={function (page: string | null): void {
                throw new Error("Function not implemented.");
              }}
              last={function (totalPages: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const Popular = withAuth(PopularPage);
