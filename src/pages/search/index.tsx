import { CustomButton, Layout, PageSelector } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { FormField, Movie } from "../../types";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { servicesMovies } from "../../services/movies";
import { Col, Container, Row } from "react-bootstrap";
import { MovieCard } from "../../components/common/card";
import { BASE_IMG } from "../../constants";
import { SearchForm } from "../../components/forms";

const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState("1");
  const [totalPages, setTotalPages] = useState("");
  const [params, setParams] = useState({ query: "", page: "1" });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams(params);
  }, [params]);

  useEffect(() => {
    const query = searchParams.get("query");
    const page = searchParams.get("page");

    servicesMovies
      .search(query, page)

      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setPage(data.page);
      });
  }, [searchParams]);

  const setSearchQuery = (param: FormField) => {
    setParams((prevState) => ({ ...prevState, query: param.query }));
  };
  const setPageQuery = (page: string) => {
    setParams((prevState) => ({ ...prevState, page: page }));
  };

  return (
    <Layout>
      <SearchForm onSearch={setSearchQuery} />

      <Container className="p-4">
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
                  ></CustomButton>
                </MovieCard>
              </Col>
            ))}
        </Row>
        {movies.length > 0 && (
          <Row className="d-flex justify-content-center ">
            <Col sm={3}>
              <PageSelector
                page={page}
                totalPages={totalPages}
                onClick={setPageQuery}
              />
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export const Search = withAuth(SearchPage);
