import {
  CustomButton,
  Layout,
  MovieCard,
  PageSelector,
} from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BASE_IMG } from "../../constants";
import { Movie } from "../../types";
import { servicesMovies } from "../../services/movies";
import { useNavigate, useSearchParams } from "react-router-dom";

const PopularPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    servicesMovies
      .getPopular({ page: searchParams.get("page") || "1" })
      .then((data) => {
        setMovies(data.results);
        setPage(data.page);
        setTotalPages(data.total_pages);
      });
  }, [searchParams]);

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
                  img={
                    movie.poster_path
                      ? `${BASE_IMG}${movie.poster_path}`
                      : "/img/poster_not_found.png"
                  }
                >
                  <CustomButton
                    variant={"dark"}
                    onClick={() => navigate(`/movies/${Number(movie.id)}`)}
                    label={"Más Info"}
                    className={"shadow"}
                  ></CustomButton>
                </MovieCard>
              </Col>
            ))}
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col sm={3}>
            <PageSelector page={page} totalPages={totalPages} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const Popular = withAuth(PopularPage);
