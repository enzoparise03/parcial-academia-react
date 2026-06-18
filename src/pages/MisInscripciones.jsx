import { Alert, Button, Card } from "react-bootstrap";
import { useStore } from "../store/useStore";

function MisInscripciones() {
  const { inscripciones, quitarInscripcion, limpiarInscripciones} = useStore();

  const total = inscripciones.reduce((acumulador, curso) => {
    return acumulador + curso.precio;
  }, 0);
  
  return (
    <section className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Mis inscripciones</h2>
        {inscripciones.length > 0 && (
          <Button variant="outline-danger" onClick={limpiarInscripciones}>
            Limpiar lista
          </Button>
        )}
      </div>

      {inscripciones.length === 0 && (
        <Alert variant="info">Todavía no seleccionaste ningún curso.</Alert>
      )}

      {inscripciones.map((curso, index) => (
        <Card className="mb-2" key={`${curso.id}-${index}`}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{curso.titulo}</h5>
              <p className="mb-0">{curso.categoria} · ${curso.precio}</p>
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => quitarInscripcion(index)}>
              Quitar
            </Button>
          </Card.Body>
        </Card>
      ))}

      {inscripciones.length > 0 && (
        <Card className="mt-3 border-success">
          <Card.Body>
            <h3>Total a pagar: ${total}</h3>
          </Card.Body>
        </Card>
      )}
    </section>
  );
}

export default MisInscripciones;