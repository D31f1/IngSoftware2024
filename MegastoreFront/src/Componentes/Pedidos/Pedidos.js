// src/Componentes/Pedidos/Pedidos.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecera from '../Cabecera/Cabecera';
import './Pedidos.css';

// Datos de ejemplo para los pedidos
const pedidosData = [
  {
    id: '001',
    fecha: '2024-09-25',
    direccion: '123 Calle Principal',
    estado: 'En preparación',
  },
  {
    id: '002',
    fecha: '2024-09-23',
    direccion: '456 Avenida Secundaria',
    estado: 'Enviado',
  },
  {
    id: '003',
    fecha: '2024-09-20',
    direccion: '789 Camino Tercero',
    estado: 'Entregado',
  },
  // Más pedidos pueden ser agregados aquí
];

const Pedidos = () => {
  const navigate = useNavigate(); // Hook para navegación

  // Función para redirigir a la página de detalles del pedido
  const verDetalles = (id) => {
    navigate(`/pedido/${id}`); // Redirigir a la ruta de detalles
  };

  return (
    <div className="pedidos-container">
      <Cabecera />

      <div className="titulo-logo-container">
        <div className="titulo-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="logo-pedido" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
          </svg>
          <h2>MIS PEDIDOS</h2>
        </div>
      </div>

      <table className="pedidos-tabla">
        <thead>
          <tr>
            <th>Número de Pedido</th>
            <th>Fecha</th>
            <th>Dirección de Envío</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidosData.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.fecha}</td>
              <td>{pedido.direccion}</td>
              <td>{pedido.estado}</td>
              <td>
                <button 
                  className="detalles-btn" 
                  onClick={() => verDetalles(pedido.id)}
                >
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pedidos;
