// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';
import Home from './Home';
import Login from './Login';
import Registro from './Registro';
import Catálogo from './Catalogo';
import Cabecera from './Cabecera'; // Asegúrate de importar la cabecera
import './App.css';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Inicia oculto

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="App">
        {/* Mostrar la cabecera solo en las rutas específicas */}
        {['/login', '/registro', '/catalogo'].includes(window.location.pathname) && <Cabecera />}
        
        <Menu isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        
        <div className={`content ${isSidebarVisible ? 'with-sidebar' : 'full-width'}`}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/catalogo" element={<Catálogo />} />
            <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} />
            <Route path="/sucursales" element={<h1>Sucursales</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} /> {/* Ruta para el registro */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
