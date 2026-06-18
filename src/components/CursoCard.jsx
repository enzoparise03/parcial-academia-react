import { Card, Button, Badge, ProgressBar } from "react-bootstrap";
import { useStore } from "../store/useStore";

function CursoCard({ curso }) {
  const { inscribirse, inscripciones } = useStore();
  
  const estaInscrito = inscripciones.some(item => item.id === curso.id);

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="mb-2 d-flex justify-content-between">
          <Badge bg="secondary">{curso.categoria}</Badge>
          <Badge bg="info">{curso.nivel}</Badge>
        </div>
        <Card.Title>{curso.titulo}</Card.Title>
        <Card.Text>{curso.descripcion}</Card.Text>

        <div className="mb-3 mt-auto">
          <small>Cupos disponibles</small>
          <ProgressBar now={curso.cupos} label={`${curso.cupos}%`} />
        </div>
        <h4>${curso.precio}</h4>

        <Button 
          variant={estaInscrito ? "success" : "primary"} 
          onClick={() => inscribirse(curso)}
          disabled={estaInscrito}
        >
          {estaInscrito ? "Ya inscripto" : "Inscribirme"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CursoCard;