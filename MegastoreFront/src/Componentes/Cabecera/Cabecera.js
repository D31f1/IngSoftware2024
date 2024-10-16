import React from 'react';
import LoginButton from '../BotonUsuario/BotonUsuario';
import { useNavigate } from 'react-router-dom';
import './Cabecera.css';

const Cabecera = ({ isLoggedIn, carrito }) => {
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    navigate('/login'); // Redirige a Login
  };

  const handleCarritoClick = () => {
    navigate('/carrito'); // Redirige a la página del carrito
  };

  return (
    <header className="cabecera">
      <LoginButton onClick={handleUserIconClick} />
      {isLoggedIn && ( // Mostrar carrito solo si el usuario está logueado
        <div className="carrito" onClick={handleCarritoClick} style={{ cursor: 'pointer', display: 'inline-block', marginLeft: '20px' }}>
          🛒 {carrito.length > 0 && <span>{carrito.length}</span>} {/* Muestra la cantidad de productos en el carrito */}
        </div>
      )}
    </header>
  );
};
export default Cabecera;
