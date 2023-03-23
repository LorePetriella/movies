import { FC, ReactNode } from "react";
import { Card } from "react-bootstrap";
import "./styles.scss";

type Props = {
  title: string;
  img: string;
  children: ReactNode;
};

const MovieCard: FC<Props> = ({ title, img, children }) => {
  return (
    <Card style={{ width: "18rem" }} className="movie-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        {children}
      </Card.Body>
    </Card>
  );
};

export { MovieCard };
