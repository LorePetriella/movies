import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePage = () => {
  const [totalPages, setTotalPages] = useState("");
  const [page, setPage] = useState("");
  const [params, setParams] = useSearchParams({ title: "", page: "1" });

  const handleFirst = () => {
    setParams((prevState) => ({ ...prevState, page: "1" }));
  };

  const handleNext = (page: string | null) => {
    let calc = Number(page) + 1;
    let text = String(calc);
    setParams((prevState) => ({ ...prevState, page: text }));
  };

  const handlePrev = (page: string | null) => {
    let calc = Number(page) - 1;
    let text = String(calc);
    setParams((prevState) => ({ ...prevState, page: text }));
  };

  const handleLast = (totalPages: string) => {
    let calc = Number(totalPages) < 500 ? totalPages : 500;
    let total = calc.toString();
    setParams((prevState) => ({ ...prevState, page: total }));
  };

  return {
    handleFirst,
    handlePrev,
    handleNext,
    handleLast,
    totalPages,
    setTotalPages,
    page,
    setPage,
    params,
    setParams,
  };
};

export { usePage };
