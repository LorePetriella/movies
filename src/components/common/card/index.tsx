import { FC } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../../types";
import "./styles.scss";

type Props = {
  title: string;
  img: string;
  id: number;
};

const MovieCard: FC<Props> = ({ title, img, id }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} onClick={() => navigate(`/movies/${id}`)}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Button variant="primary">Más Info</Button>
      </Card.Body>
    </Card>
  );
};

export { MovieCard };
