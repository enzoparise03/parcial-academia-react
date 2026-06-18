import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import MisInscripciones from "./pages/MisInscripciones";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/mis-inscripciones" element={<MisInscripciones />} />
          <Route path="*" element={<h2 className="text-center mt-5">Página no encontrada</h2>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;