import React, { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { BASE_IMG } from "../../../constants";
import { Movie } from "../../../types";
import "./styles.scss";

type Props = {
  movies: Movie[];
};

const Slider: FC<Props> = ({ movies }) => {
  return (
    <div className="container-fluid">
      <Carousel fade>
        {movies.splice(0, 10).map((movie) => (
          <Carousel.Item key={movie.id}>
            <img

              className="d-block w-100 slider-img"
              src={`${BASE_IMG}${movie.backdrop_path}`}

           

              alt={movie.title}
            />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export { Slider };
