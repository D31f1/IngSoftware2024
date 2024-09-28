// src/App.js
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Componentes/Menu/Menu';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import Registro from './Componentes/Registro/Registro';
import Catálogo from './Componentes/Catalogo/Catalogo';
import Cabecera from './Componentes/Cabecera/Cabecera';
import Pedidos from './Pedidos/Pedidos';
import './App.css';
import DetallePedido from './Componentes/DetallePedido/DetallePedido';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Inicia oculto

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <AppContent toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
    </Router>
  );
}

function AppContent({ toggleSidebar, isSidebarVisible }) {
  const location = useLocation(); // Ahora está dentro del contexto de <Router>

  // Función que determina si debe mostrarse la cabecera en la ruta actual
  const shouldShowCabecera = () => {
    return ['/login', '/registro', '/catalogo'].includes(location.pathname);
  };

  return (
    <div className="App">
      {/* Mostrar la cabecera solo si la función lo permite */}
      {shouldShowCabecera() && <Cabecera />}
      
      <Menu isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      
      <div className={`content ${isSidebarVisible ? 'with-sidebar' : 'full-width'}`}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página Home */}
          <Route path="/catalogo" element={<Catálogo />} /> {/* Página Catálogo */}
          <Route path="/sobre-nosotros" element={<h1>Sobre Nosotros</h1>} /> {/* Página Sobre Nosotros */}
          <Route path="/sucursales" element={<h1>Sucursales</h1>} /> {/* Página Sucursales */}
          <Route path="/login" element={<Login />} /> {/* Página Login */}
          <Route path="/registro" element={<Registro />} /> {/* Página Registro */}
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedido/:id" element={<DetallePedido />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
