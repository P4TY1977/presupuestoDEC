import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartidasLista from "./components/PartidasLista"
import PartidaForma from "./components/PartidaForma"
import PartidasNavegacion from "./components/PartidasNavegacion" 
import { Container } from "@material-ui/core"


export default function App() {
  return (
    <BrowserRouter>  
      <PartidasNavegacion/>   
      <Container>
        <Routes>
          <Route path='/' element={<PartidasLista />} />
          <Route path='/partidas/agregar' element={<PartidaForma />} />
          <Route path='/partidas/:id/editar' element={<PartidaForma />} />
        </Routes>
      </Container> 
           
    </BrowserRouter>
  );
}


