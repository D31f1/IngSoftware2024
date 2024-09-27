// src/Componentes/Catalogo/Catalogo.js
import React from 'react';
import Cabecera from '../Cabecera/Cabecera';
import './Catalogo.css';

const ProductCard = ({ image, name, price, agregarAlCarrito, item }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h5 className="product-name">{name}</h5>
            <p className="product-price">${price}</p>
            <button onClick={() => agregarAlCarrito(item)}>Agregar al carrito</button>
        </div>
    );
};

const Catalogo = ({ agregarAlCarrito }) => {
    const clothingItems = [
        { id: 1, name: 'Camisa', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Pantalón', price: 49.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Zapatos', price: 79.99, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Chaqueta', price: 99.99, image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="catalog-container">
            <Cabecera />
            <div className="grid-container">
                {clothingItems.map((item) => (
                    <ProductCard
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        item={item}
                        agregarAlCarrito={agregarAlCarrito}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
