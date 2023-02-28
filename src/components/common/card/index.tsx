import { Card, Button } from "react-bootstrap";
import "./styles.scss";

const MovieCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://es.web.img3.acsta.net/pictures/23/01/16/17/21/5753145.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>

        <Button variant="primary">Más Info</Button>
      </Card.Body>
    </Card>
  );
};

export { MovieCard };
