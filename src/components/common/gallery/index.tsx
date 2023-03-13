import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BASE_IMG } from "../../../constants";
import { Movie } from "../../../types";
import "./styles.scss";

type Props = {
  movies: Movie[];
  section: string;
};

const Gallery: FC<Props> = ({ movies, section }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="movie-gallery container">
        <h2>{section}</h2>
        <Row className="flex-nowrap scroll-container">
          {movies.slice(0, 10).map((movie) => (
            <Col xs={6} sm={4} md={3} lg={2} key={movie.id}>
              <img
                src={`${BASE_IMG}${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/movies/${Number(movie.id)}`)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export { Gallery };
