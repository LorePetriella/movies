import { Col, Container, Row } from "react-bootstrap";
import { Layout, MovieCard } from "../../components";
import { withAuth } from "../../hoc";

const DetailsPage = () => {
  return (
    <Layout>
      <h2>Detalles</h2>
      <Container>
        <Row>
          <Col>
            <MovieCard title={""} img={""} id={0} />
          </Col>
          <Col>
            <h4 className="fw-bold character-name">Título Peli</h4>
            <p className="character-description">Descripción</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const Details = withAuth(DetailsPage);
