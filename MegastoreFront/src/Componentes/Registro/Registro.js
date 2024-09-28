import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import Cabecera from '../Cabecera/Cabecera';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    direccionesEnvio: [],
    email: '',
    contrasena: '',
    confirmarContrasena: ''
  });
  const [newAddress, setNewAddress] = useState({ calle: '', altura: '' });
  const [showDirections, setShowDirections] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNewAddressChange = (field, value) => {
    setNewAddress({ ...newAddress, [field]: value });
  };

  const handleAddAddress = () => {
    if (newAddress.calle && newAddress.altura) {
      setFormData({
        ...formData,
        direccionesEnvio: [...formData.direccionesEnvio, newAddress]
      });
      setNewAddress({ calle: '', altura: '' });
    }
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = formData.direccionesEnvio.filter((_, i) => i !== index);
    setFormData({ ...formData, direccionesEnvio: updatedAddresses });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    navigate('/Home');
  };

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
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
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
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg>
            </button>
            <button type="button" className='mostrar-ocultar-button' onClick={() => setShowDirections(!showDirections)}>
            {showDirections ? (
              // SVG para ocultar (flecha hacia arriba)
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708z"/>
              </svg>
            ) : (
              // SVG para mostrar (flecha hacia abajo)
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            )}
            </button>

            
          </div>
          
          {showDirections && (
            <div className="address-list">
              {formData.direccionesEnvio.map((direccion, index) => (
                <div key={index} className="address-item">
                 <span>{direccion.calle}</span>
                 <span>{direccion.altura}</span>
                  <button type="button" className="cancel-button" onClick={() => handleRemoveAddress(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="register-group-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-group-contraseña">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register-group-confContraseña">
          <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmarContrasena"
            name="confirmarContrasena"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group-register">
          <button type="submit">Aceptar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
