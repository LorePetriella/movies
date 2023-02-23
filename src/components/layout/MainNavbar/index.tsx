import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">AdaMovies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
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
              Próximos Estrenos
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Cerrar Sesión
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Registro
            </NavLink>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { MainNavbar };
