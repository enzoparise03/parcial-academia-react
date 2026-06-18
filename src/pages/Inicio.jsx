import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <Container className="text-center mt-5 mb-4">
      <h1>Bienvenido a Academia React</h1>
      <p className="lead mt-3">
        Elegí cursos, armá tu inscripción y practicá estado global con Zustand.
      </p>
      <Button as={Link} to="/cursos" variant="primary" size="lg" className="mt-4">
        Ver catálogo completo
      </Button>
    </Container>
  );
}

export default Inicio;