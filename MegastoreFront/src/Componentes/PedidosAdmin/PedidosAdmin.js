// src/Componentes/PedidosAdmin/PedidosAdmin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecera from '../Cabecera/Cabecera';
import '../Pedidos/Pedidos.css';
import './PedidosAmin.css'; // Fixed typo in the import statement

// Define possible states in the order flow
const estadosData = ['Aprobado', 'En preparación', 'Para entregar', 'Entregado'];

const pedidosData = [
  {
    id: '001',
    fecha: '2024-09-25',
    fechaEntrega: '',
    usuario: 'Juan Pérez',
    estado: 'Aprobado',
  },
  {
    id: '002',
    fecha: '2024-09-23',
    fechaEntrega: '2024-09-25',
    usuario: 'María Gómez',
    estado: 'Entregado',
  },
  {
    id: '003',
    fecha: '2024-09-20',
    fechaEntrega: '',
    usuario: 'Pedro Rodríguez',
    estado: 'En preparación',
  },
];

const PedidosAdmin = () => {
  const navigate = useNavigate();
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const [pedidos, setPedidos] = useState(pedidosData); // State for orders

  // Navigate to details
  const verDetalles = (id) => {
    navigate(`/pedido/${id}`);
  };

  // Function to get the next state in the order flow
  const obtenerSiguienteEstado = (estadoActual) => {
    const indiceActual = estadosData.indexOf(estadoActual);
    return indiceActual < estadosData.length - 1
      ? estadosData[indiceActual + 1]
      : estadoActual; // No change if already "Entregado"
  };

  // Handle order update with confirmation
  const manejarActualizarPedido = (pedido) => {
    setPedidoSeleccionado(pedido);
    setConfirmacionVisible(true);
  };

  // Confirm the state change
  const confirmarCambioEstado = () => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === pedidoSeleccionado.id
          ? {
              ...pedido,
              estado: obtenerSiguienteEstado(pedido.estado),
              fechaEntrega:
                obtenerSiguienteEstado(pedido.estado) === 'Entregado'
                  ? new Date().toISOString().split('T')[0] // Assign current date when delivered
                  : pedido.fechaEntrega,
            }
          : pedido
      )
    );
    setConfirmacionVisible(false);
  };

  return (
    <div className="pedidos-container">
      <Cabecera />

      <div className="titulo-logo-container">
        <div className="titulo-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="logo-pedido" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
          </svg>
          <h2>PEDIDOS </h2>
        </div>
      </div>

      <table className="pedidos-tabla">
        <thead>
          <tr>
            <th>Número de Pedido</th>
            <th>Fecha de Solicitud</th>
            <th>Fecha de Entrega</th>
            <th>Usuario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.fecha}</td>
              <td>{pedido.fechaEntrega || 'Pendiente'}</td> {/* Improved visibility for empty dates */}
              <td>{pedido.usuario}</td>
              <td>{pedido.estado}</td>
              <td>
                <button className="detalles-btn" onClick={() => verDetalles(pedido.id)}>
                  Detalle
                </button>
                {pedido.estado !== 'Entregado' && (
                  <button className="actualizar-btn" onClick={() => manejarActualizarPedido(pedido)}>
                    Actualizar Estado
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {confirmacionVisible && (
        <div className="confirmacion-cambio">
          <p>
            ¿Está seguro que desea cambiar el estado del pedido de{' '}
            {pedidoSeleccionado.estado} a{' '}
            {obtenerSiguienteEstado(pedidoSeleccionado.estado)}?
          </p>
          <div>
            <button className='confirmar-btn' onClick={confirmarCambioEstado}>Confirmar</button>
            <button className='cancelar-btn' onClick={() => setConfirmacionVisible(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PedidosAdmin;
