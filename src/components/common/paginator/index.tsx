import { FC, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "./styles.scss";

type Props = {
  page: string;
  totalPages: string;
};

const PageSelector: FC<Props> = ({ page, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const first = () => {
    setSearchParams({ page: "1" });
  };
  const prev = () => {
    let numberPage = Number(page) - 1;
    let stringPage = numberPage.toString();
    setSearchParams({ page: stringPage });
  };
  const next = () => {
    let numberPage = Number(page) + 1;
    let stringPage = numberPage.toString();
    setSearchParams({ page: stringPage });
  };
  const last = () => {
    const lastPage = totalPages <= "500" ? totalPages : "500";
    setSearchParams({ page: lastPage });
  };

  useEffect(() => {}, [searchParams]);

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
