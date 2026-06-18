import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../store/useStore";

function Header() {
    const inscripciones = useStore((state) => state.inscripciones);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Academia React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/cursos">Cursos</Nav.Link>
            <Nav.Link as={NavLink} to="/mis-inscripciones">
              Mis Inscripciones <Badge bg="primary">{inscripciones.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;