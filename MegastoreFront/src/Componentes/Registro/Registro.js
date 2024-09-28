import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import Cabecera from '../Cabecera/Cabecera';

const Registro = () => {
  // Estado inicial para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    nroTelefono: '',  // Número de teléfono del usuario
    direcciones: [{ calle: '', numero: '' }],  // Lista de direcciones con calle y número
    correo: '',  // Correo electrónico del usuario
    contrasenia: '',  // Contraseña ingresada
    confirmarContrasenia: ''  // Confirmación de la contraseña
  });
  const [newAddress, setNewAddress] = useState({ calle: '', altura: '' });
  const [showDirections, setShowDirections] = useState(false);
  const navigate = useNavigate();// Hook de React Router para redireccionar

  // Manejador para los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador para cambios en las direcciones de envío (calle y número)
  const handleNewAddressChange = (index, field, value) => {
    setNewAddress({ ...newAddress, [field]: value });
  };

  // Añade una nueva dirección de envío
  const handleAddAddress = () => {
    if (newAddress.calle && newAddress.altura) {
      setFormData({
        ...formData,
        direcciones: [...formData.direcciones, newAddress]
      });
      setNewAddress({ calle: '', altura: '' });
    }
  };

  // Elimina una dirección de envío por índice
  const handleRemoveAddress = (index) => {
    const updatedAddresses = formData.direcciones.filter((_, i) => i !== index);
    setFormData({ ...formData, direcciones: updatedAddresses });
  };

  // Redirecciona al usuario a la página de inicio si cancela el registro
  const handleCancel = () => {
    navigate('/Home');
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const registrarUsuario = () => {
    const usuarioData = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      nroTelefono: formData.nroTelefono,
      direcciones: formData.direcciones,
      correo: formData.correo,
      contrasenia: formData.contrasenia
    };
    // Solicitud POST al backend para registrar el usuario
    fetch('http://localhost:8080/usuario/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarioData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al registrar el usuario');
        }
      })
      .then((data) => {
        console.log('Usuario registrado:', data);
        alert('Registro exitoso');
        navigate('/Home');  // Redirecciona a la página de inicio después del registro exitoso
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al registrar el usuario');
      });
  }


  return (
    <div className='register-container'>
      <div><Cabecera /></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="registro-svg" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
      </svg>
      <h1>REGÍSTRATE</h1>
      <form onSubmit={handleSubmit}>
        <div className="register-group-nombre">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-group-apellido">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-group-telefono">
          <label htmlFor="nroTelefono">Teléfono</label>
          <input
            type="text"
            id="nroTelefono"
            name="nroTelefono"
            value={formData.nroTelefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="direccion-envio-group">
          <label>Dirección de Envío</label>
          <div className="calle-altura">
            <input
              type="text"
              className="calle-input"
              value={newAddress.calle}
              onChange={(e) => handleNewAddressChange('calle', e.target.value)}
              required
              placeholder="Calle"
            />
            <input
              type="text"
              className="altura-input"
              value={newAddress.altura}
              onChange={(e) => handleNewAddressChange('altura', e.target.value)}
              required
              placeholder="Altura"
            />
            <button type="button" className="add-button" onClick={handleAddAddress}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
              </svg>
            </button>
            <button type="button" className='mostrar-ocultar-button' onClick={() => setShowDirections(!showDirections)}>
              {showDirections ? (
                // SVG para ocultar (flecha hacia arriba)
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708z" />
                </svg>
              ) : (
                // SVG para mostrar (flecha hacia abajo)
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              )}
            </button>


          </div>

          {showDirections && (
            <div className="address-list">
              {formData.direcciones.map((direccion, index) => (
                <div key={index} className="address-item">
                  <span>{direccion.calle}</span>
                  <span>{direccion.altura}</span>
                  <button type="button" className="cancel-button" onClick={() => handleRemoveAddress(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="register-group-email">
          <label htmlFor="correo">Email</label>
          <input
            type="correo"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-group-contraseña">
          <label htmlFor="contrasenia">Contraseña</label>
          <input
            type="password"
            id="contrasenia"
            name="contrasenia"
            value={formData.contrasenia}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-group-confContraseña">
          <label htmlFor="confirmarContrasenia">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmarContrasenia"
            name="confirmarContrasenia"
            value={formData.confirmarContrasenia}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group-register">
          <button type="submit" onClick={registrarUsuario}>Aceptar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
