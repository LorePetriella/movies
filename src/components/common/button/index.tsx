import { FC } from "react";
import { Button } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";

type Props = {
  variant: string;
  onClick: () => void;
  label: string;
  id?: number;
};

const CustomButton: FC<Props> = ({ variant, onClick, label }) => {
  // const navigate = useNavigate();
  return (
    <Button
      className="shadow"
      variant={variant}
      // onClick={() => navigate(onClick())}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export { CustomButton };
