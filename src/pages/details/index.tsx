import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CustomButton, Layout, MovieCard } from "../../components";
import { BASE_IMG } from "../../constants";
import { withAuth } from "../../hoc";
import { servicesMovies } from "../../services/movies";
import { Movie } from "../../types";

const DetailsPage = () => {
  const [detail, setDetails] = useState<Movie>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      servicesMovies.getById(id).then((data) => setDetails(data));
    }
  }, []);
  return (
    <Layout>
      <Container
        fluid
        className="d flex"
        style={{
          backgroundImage: `url(${BASE_IMG}${detail?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            <MovieCard title={""} img={`${BASE_IMG}${detail?.poster_path}`}>
              <CustomButton
                variant={"dark"}
                onClick={() => `/movies/${Number(detail?.id)}/videos`}
                label={"Trailer"}
              ></CustomButton>
            </MovieCard>
          </Col>
          <Col
            className="text-light fw-bolder"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "1rem" }}
          >
            <h2 className="fw-bold">{detail?.title}</h2>
            <p className="">Resúmen: {detail?.overview}</p>

            <p className="">Página Web: {detail?.homepage}</p>
            <p className="">
              Productora:{" "}
              {detail?.production_companies.map((co) => co.name).join(", ")}
            </p>
            <p className="">Lanzamiento: {detail?.release_date}</p>
            <p className="">Presupuesto: {detail?.budget}</p>
            <p className="">Cantidad de Votos: {detail?.vote_count}</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const Details = withAuth(DetailsPage);
