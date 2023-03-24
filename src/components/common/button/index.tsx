import { FC } from "react";
import { Button } from "react-bootstrap";

type Props = {
  variant: string;
  onClick: () => void;
  label: string;
  id?: number;
  type?: string;
  className?: string;
};

const CustomButton: FC<Props> = ({ variant, onClick, label, className }) => {
  return (
    <Button className={className} variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};

export { CustomButton };
