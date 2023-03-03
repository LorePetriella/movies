import { FC } from "react";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "../button";
import "./styles.scss";

type Props = {
  title: string;
  img: string;
  id?: number;
  label: string;
};

const MovieCard: FC<Props> = ({ title, img, id, label }) => {
  // const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <CustomButton
          variant={"dark"}
          onClick={() => `/movies/${id}`}
          label={label}
        ></CustomButton>
      </Card.Body>
    </Card>
  );
};

export { MovieCard };

{
  /* <Button variant="primary" onClick={() => navigate(`/movies/${id}`)}>
          Más Info
        </Button> */
}
