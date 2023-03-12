import { FC, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FormField, TitleSearch } from "../../../types";

const defaultValue: FormField = {
  query: "",
};

type Props = {
  onSearch: (params: TitleSearch | FormField) => void;
};

const SearchForm: FC<Props> = ({ onSearch }) => {
  const [fields, setFields] = useState(defaultValue);
  const [params, setParams] = useState({ query: "", page: "1" });

  useEffect(() => {
    onSearch(fields);
  }, [fields]);

  return (
    <NavLink className="nav-link" to="/search">
      <Form className="d-flex">
        <Form.Control
          type="search"
          value={fields.query}
          placeholder="Tu Búsqueda"
          className="me-2"
          aria-label="Search"
          onChange={(e) => {
            setFields((prevState) => ({ ...prevState, query: e.target.value }));
            setParams((prevState) => ({ ...prevState, query: e.target.value }));
          }}
        />
      </Form>
    </NavLink>
  );
};

export { SearchForm };
