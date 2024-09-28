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

  const navigate = useNavigate();  // Hook de React Router para redireccionar

  // Manejador para los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador para cambios en las direcciones de envío (calle y número)
  const handleAddressChange = (index, field, value) => {
    const newDirecciones = [...formData.direcciones];
    newDirecciones[index][field] = value;
    setFormData({ ...formData, direcciones: newDirecciones });
  };

  // Añade una nueva dirección de envío
  const handleAddAddress = () => {
    setFormData({ ...formData, direcciones: [...formData.direcciones, { calle: '', numero: '' }] });
  };

  // Elimina una dirección de envío por índice
  const handleRemoveAddress = (index) => {
    const newDirecciones = formData.direcciones.filter((_, i) => i !== index);
    setFormData({ ...formData, direcciones: newDirecciones });
  };

  // Redirecciona al usuario a la página de inicio si cancela el registro
  const handleCancel = () => {
    navigate('/Home');
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de coincidencia de contraseñas
    if (formData.contrasenia !== formData.confirmarContrasenia) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Datos a enviar al backend
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
  };

  return (
    <div className='register-container'>
      <div><Cabecera/></div>  {/* Componente de cabecera */}
      
      {/* SVG con ícono de registro */}
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="registro-svg" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>

      <h2>REGÍSTRATE</h2>

      {/* Formulario de registro */}
      <form onSubmit={handleSubmit}>
        
        {/* Campo de nombre */}
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

        {/* Campo de apellido */}
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

        {/* Campo de teléfono */}
        <div className="register-group">
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

        {/* Manejo de direcciones de envío */}
        <div className="register-group">
          <label>Direcciones de Envío</label>
          {formData.direcciones.map((direccion, index) => (
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
                value={direccion.numero}
                onChange={(e) => handleAddressChange(index, 'numero', e.target.value)}
                required
                placeholder={`Número ${index + 1}`}
              />
              <button type="button" onClick={() => handleRemoveAddress(index)}>Eliminar</button>
            </div>
          ))}
          <button type="button" onClick={handleAddAddress}>Agregar Dirección</button>
        </div>

        {/* Campo de correo */}
        <div className="register-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo de contraseña */}
        <div className="register-group">
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

        {/* Campo para confirmar contraseña */}
        <div className="register-group">
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

        {/* Botones de acción */}
        <div className="button-group">
          <button type="submit">Aceptar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
