import { FC, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FormField } from "../../../types";

const defaultValue: FormField = {
  query: "",
};

type Props = {
  onSearch: (params: FormField) => void;
};

const SearchForm: FC<Props> = ({ onSearch }) => {
  const [fields, setFields] = useState(defaultValue);

  useEffect(() => {
    onSearch(fields);
  }, [fields]);

  return (
    <Form className="d-flex justify-content-center mt-4">
      <Form.Control
        type="search"
        value={fields.query}
        placeholder="Tu Búsqueda"
        style={{ borderColor: "gray", width: "40%" }}
        onFocus={(e) => {
          e.target.style.borderColor = "red";
        }}
        className="me-2"
        aria-label="Search"
        onChange={(e) => {
          setFields((prevState) => ({ ...prevState, query: e.target.value }));
        }}
      />
    </Form>
  );
};

export { SearchForm };
