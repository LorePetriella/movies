import { FC } from "react";
import { Pagination } from "react-bootstrap";

type Props = {
  page: string;
  totalPages: string;
  first: () => void;
  next: (page: string | null) => void;
  prev: (page: string | null) => void;
  last: (totalPages: string) => void;
};

const PageSelector: FC<Props> = ({
  page,
  totalPages,
  first,
  next,
  prev,
  last,
}) => {
  return (
    <Pagination>
      <Pagination.First active={page === "1"} />
      <Pagination.Prev disabled={page === "1"} />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export { PageSelector };
