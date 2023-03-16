import { Container, Nav, Navbar as NavbarBST } from "react-bootstrap";
import { NavLink, useSearchParams } from "react-router-dom";
import { useMe } from "../../../hooks";
import { FormField } from "../../../types";
import { SearchForm } from "../../forms/Search";

const MainNavbar = () => {
  const { logout, me } = useMe();
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearchQuery = (params: FormField) => {
    setSearchParams(params);
  };
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
                  Últimos Lanzamientos
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

          <SearchForm onSearch={setSearchQuery} />
        </NavbarBST.Collapse>
      </Container>
    </NavbarBST>
  );
};

export { MainNavbar };
