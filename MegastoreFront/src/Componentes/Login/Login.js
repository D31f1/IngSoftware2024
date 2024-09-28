// src/Login.js
import React, { useState } from 'react'; // Importa useState
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import Cabecera from '../Cabecera/Cabecera';

const Login = ({ setIsLoggedIn }) => { // Acepta setIsLoggedIn como prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Para redirigir después de iniciar sesión

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Aquí va la lógica de autenticación. Este es solo un ejemplo simple.
    if (username && password) {
      // Si el inicio de sesión es exitoso:
      setIsLoggedIn(true); // Cambia el estado a logged in
      navigate('/'); // Redirige a la página de inicio o a donde desees
    } else {
      // Maneja el error de inicio de sesión si es necesario
      alert('Por favor ingresa tus credenciales.');
    }
  };

  return (
    <div className='login-container'> 
      <div><Cabecera /></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>
      <h1>INICIAR SESIÓN</h1>

      <form onSubmit={handleSubmit}> {/* Añade onSubmit al formulario */}
        <div className='input-group'>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input 
              type="text" 
              id="username" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} // Controla el estado del input
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input 
              type="password" 
              id="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // Controla el estado del input
            />
          </div>
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <p className='register-prompt'>¿No tienes una cuenta? <Link to="/registro">¡Regístrate ahora!</Link></p>
    </div>
  );
};

export default Login;
