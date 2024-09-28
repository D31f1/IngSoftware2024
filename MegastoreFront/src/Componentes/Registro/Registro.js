import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import Cabecera from '../Cabecera/Cabecera';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    direccionesEnvio: [{ calle: '', altura: '' }], // Inicializa con una dirección vacía
    email: '',
    contrasena: '',
    confirmarContrasena: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (index, field, value) => {
    const newDireccionesEnvio = [...formData.direccionesEnvio];
    newDireccionesEnvio[index][field] = value;
    setFormData({ ...formData, direccionesEnvio: newDireccionesEnvio });
  };

  const handleAddAddress = () => {
    setFormData({ ...formData, direccionesEnvio: [...formData.direccionesEnvio, { calle: '', altura: '' }] });
  };

  const handleRemoveAddress = (index) => {
    const newDireccionesEnvio = formData.direccionesEnvio.filter((_, i) => i !== index);
    setFormData({ ...formData, direccionesEnvio: newDireccionesEnvio });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
  };

  const handleCancel = () => {
    navigate('/Home'); // Redirige al inicio
  };

  return (
    <div className='register-container'>
      <div><Cabecera/></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="registro-svg" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>
      <h2>REGÍSTRATE</h2>
      <form onSubmit={handleSubmit}>
        <div className="register-group">
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
        <div className="register-group">
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
        <div className="register-group">
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

        {/* Sección para manejar múltiples direcciones de envío */}
        <div className="register-group">
          <label>Direcciones de Envío</label>
          {formData.direccionesEnvio.map((direccion, index) => (
            <div key={index} className="direccion-envio-group">
              <input
                type="text"
                value={direccion.calle}
                onChange={(e) => handleAddressChange(index, 'calle', e.target.value)}
                required
                placeholder={`Calle ${index + 1}`}
              />
              <input
                type="text"
                value={direccion.altura}
                onChange={(e) => handleAddressChange(index, 'altura', e.target.value)}
                required
                placeholder={`Altura ${index + 1}`}
              />
              <button type="button" onClick={() => handleRemoveAddress(index)}>
                Eliminar
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddAddress}>Agregar Dirección</button>
        </div>

        <div className="register-group">
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
        <div className="register-group">
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
        <div className="register-group">
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
        <div className="button-group">
          <button type="submit">Aceptar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
