import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const SearchPage = () => {
  return (
    <Layout>
      Búsqueda
      {/* <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Tu Búsqueda"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Buscar</Button>
      </Form> */}
    </Layout>
  );
};

export const Search = withAuth(SearchPage);
