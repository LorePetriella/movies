import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { BASE_IMG } from "../../../constants";
import { Movie } from "../../../types";
import "./styles.scss";

type Props = {
  movies: Movie[];
};

const Gallery: FC<Props> = ({ movies }) => {
  return (
    <>
      <div className="movie-gallery container">
        <h2>Populares</h2>
        <Row className="flex-nowrap scroll-container">
          {movies.slice(0, 10).map((movie) => (
            <Col xs={6} sm={4} md={3} lg={2} key={movie.id}>
              <img src={`${BASE_IMG}${movie.poster_path}`} alt={movie.title} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export { Gallery };
