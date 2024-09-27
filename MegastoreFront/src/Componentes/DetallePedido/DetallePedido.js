// src/Componentes/DetallePedido/DetallePedido.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetallePedido.css';
import Cabecera from '../Cabecera/Cabecera';

const DetallePedido = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtiene el id del pedido desde la URL

  // Ejemplo de datos del pedido. Puedes obtener esto de un API o de un contexto global.
  const pedidoDetalles = {
    id,
    productos: [
      { nombre: 'Producto 1', precio: 10, cantidad: 2 },
      { nombre: 'Producto 2', precio: 15, cantidad: 1 },
      { nombre: 'Producto 3', precio: 20, cantidad: 3 },
    ],
  };

  // Calcular el subtotal y el total
  const subtotal = pedidoDetalles.productos.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const total = subtotal; // Puedes agregar impuestos o descuentos si es necesario

  return (
    <div className="detalle-pedido-container">
        <Cabecera/>
        <div className='titulo-logo-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="logo-detalle" viewBox="0 0 16 16">
                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
            <h2>DETALLE DEL PEDIDO #{pedidoDetalles.id}</h2>
        </div>
      

      <table className="detalle-tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {pedidoDetalles.productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td>{producto.cantidad}</td>
              <td>${(producto.precio * producto.cantidad).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-container">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>

      <button className="volver-btn" onClick={() => navigate('/pedidos')}>
        Volver
      </button>
    </div>
  );
};

export default DetallePedido;
