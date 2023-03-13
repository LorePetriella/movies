import { CustomButton, Layout, PageSelector } from "../../components";
import { withAuth } from "../../hoc";
import React, { useEffect, useState } from "react";
import { FormField, Movie } from "../../types";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams(params);

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
    setSearchParams(params);
    setParams((prevState) => ({ ...prevState, query: param.query }));
    console.log(params);
  };
  const setPageQuery = (page: string) => {
    setSearchParams(params);
    setParams((prevState) => ({ ...prevState, page: page }));
    console.log(params);
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
