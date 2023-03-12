import { FC, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "./styles.scss";

type Props = {
  page: string;
  totalPages: string;
  onClick: (page: string, query?: string) => void;
};

const PageSelector: FC<Props> = ({ page, totalPages, onClick }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({ query: "", page: "1" });

  const first = () => {
    setSearchParams({ page: "1" });
    setParams((prevState) => ({ ...prevState, page: "1" }));
    onClick((page = "1"));
  };
  const prev = () => {
    let numberPage = Number(page) - 1;
    let stringPage = numberPage.toString();
    setSearchParams({ page: stringPage });
    setParams((prevState) => ({ ...prevState, page: stringPage }));
    onClick(stringPage);
  };
  const next = () => {
    let numberPage = Number(page) + 1;
    let stringPage = numberPage.toString();
    setSearchParams({ page: stringPage });
    setParams((prevState) => ({ ...prevState, page: stringPage }));
    onClick(stringPage);
  };
  const last = () => {
    let lastPage;
    totalPages <= "500" ? (lastPage = totalPages) : (lastPage = "500");

    setSearchParams({ page: lastPage });
    setParams((prevState) => ({ ...prevState, page: totalPages }));
    setSearchParams({ page: lastPage });
    onClick((page = lastPage));
  };

  return (
    <Pagination size="lg" className="pagination-black">
      <Pagination.First onClick={() => first()} active={page == "1"} />
      <Pagination.Prev onClick={() => prev()} disabled={page == "1"} />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next
        onClick={() => next()}
        disabled={page == totalPages || page == "500"}
      />
      <Pagination.Last
        onClick={() => last()}
        disabled={page == totalPages || page == "500"}
      />
    </Pagination>
  );
};

export { PageSelector };
