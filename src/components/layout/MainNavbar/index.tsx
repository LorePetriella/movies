import { Container, Nav, Navbar as NavbarBST } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMe } from "../../../hooks";

const MainNavbar = () => {
  const { logout, me } = useMe();

  return (
    <NavbarBST bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <NavbarBST.Brand href="#">AdaMovies</NavbarBST.Brand>
        <NavbarBST.Toggle aria-controls="navbarScroll" />
        <NavbarBST.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

            {me ? (

              <>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/populares">
                  Populares
                </NavLink>
                <NavLink className="nav-link" to="/upcoming">
                  Próximamente
                </NavLink>
                <NavLink className="nav-link" to="/search">
                  Buscador
                </NavLink>
                <Nav.Link onClick={logout}>Cerrar sesión</Nav.Link>
              </>

            ) : (

              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  Registro
                </NavLink>
              </>
            )}
          </Nav>
        </NavbarBST.Collapse>
      </Container>
    </NavbarBST>
  );
};

export { MainNavbar };
