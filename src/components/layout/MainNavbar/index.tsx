import {
  Button,
  Container,
  Form,
  Nav,
  Navbar as NavbarBST,
  // NavLink as NavLinkBST,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMe } from "../../../hooks";

const MainNavbar = () => {
  const { logout } = useMe();

  return (
    <NavbarBST bg="light" expand="lg">
      <Container fluid>
        <NavbarBST.Brand href="#">AdaMovies</NavbarBST.Brand>
        <NavbarBST.Toggle aria-controls="navbarScroll" />
        <NavbarBST.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/popular">
              Populares
            </NavLink>
            <NavLink className="nav-link" to="/upcoming">
              Últimos Lanzamientos
            </NavLink>
            <Nav.Link onClick={logout}>Cerrar sesión</Nav.Link>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Registro
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Tu Búsqueda"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Buscar</Button>
          </Form>
        </NavbarBST.Collapse>
      </Container>
    </NavbarBST>
  );
};

export { MainNavbar };
