import { Row, Col, Form } from "react-bootstrap";
import CursoCard from "../components/CursoCard";
import { useStore } from "../store/useStore";
import { useState } from "react";

function Cursos() {
  const cursos = useStore((state) => state.cursos);
  
  const [busqueda, setBusqueda] = useState("");

  const cursosFiltrados = cursos.filter(curso => 
    curso.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="mb-5">
      <h2 className="mb-3">Cursos disponibles</h2>
      
      <Form.Control 
        type="text" 
        placeholder="Buscar curso por nombre..." 
        className="mb-4"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <Row>
        {cursosFiltrados.map((curso) => (
          <Col md={6} lg={3} className="mb-4" key={curso.id}>
            <CursoCard curso={curso} />
          </Col>
        ))}
        {cursosFiltrados.length === 0 && <p>No se encontraron cursos.</p>}
      </Row>
    </section>
  );
}

export default Cursos;