import { FC } from "react";
import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

type Props = {
  variant: string;
  onClick: () => string;
  label: string;
  id?: number;
};

const CustomButton: FC<Props> = ({ variant, onClick, label }) => {
  const navigate = useNavigate();
  return (
    <Button
      className="shadow"
      variant={variant}
      onClick={() => navigate(onClick())}
    >
      {label}
    </Button>
  );
};

export { CustomButton };
