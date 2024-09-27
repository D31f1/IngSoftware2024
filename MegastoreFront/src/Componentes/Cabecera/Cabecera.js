import React from 'react';

import LoginButton from '../BotonUsuario/BotonUsuario';
import { useNavigate } from 'react-router-dom';
import './Cabecera.css';
import '../Login/Login.css';

const Cabecera = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const handleUserIconClick = () => {
    // Lógica para redirigir a la página de inicio de sesión o mostrar el menú
    navigate('./Login');
  };

    return (
        <header>
            
            <LoginButton onClick={handleUserIconClick} />
        </header>
    );
};
export default Cabecera;