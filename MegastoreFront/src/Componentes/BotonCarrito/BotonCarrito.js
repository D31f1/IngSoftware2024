// src/BotonCarrito/BotonCarrito.js
import React from 'react';
import './BotonCarrito.css'; // Asegúrate de crear este archivo CSS
import { Link } from 'react-router-dom';

const BotonCarrito = ({ carrito }) => {
    return (
        <div className='button'>
            <Link to="/carrito">
                <button className="carrito-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M1 1.5A.5.5 0 0 1 1.5 1h.682l1.1 8.36a1 1 0 0 0 1.002.93h6.54a1 1 0 0 0 .994-.883L14.32 3H4.6l-.1-.5H1.5a.5.5 0 0 1-.5-.5zM3 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>

                </button>
            </Link>
        </div>
    );
};

export default BotonCarrito;
