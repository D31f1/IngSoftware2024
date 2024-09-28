import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Cabecera from '../Cabecera/Cabecera';
import './Catalogo.css'; // Archivo CSS para estilos
import '../Cabecera/Cabecera.css';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h5 className="product-name">{name}</h5>
            <p className="product-price">${price}</p>
        </div>
    );
};

const Catalogo = () => {
   
    const clothingItems = [
        { id: 1, name: 'Camisa', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Pantalón', price: 49.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Zapatos', price: 79.99, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Chaqueta', price: 99.99, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Camisa', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Pantalón', price: 49.99, image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Zapatos', price: 79.99, image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Chaqueta', price: 99.99, image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="catalog-container">
           
               <Cabecera /> {/* Renderiza la cabecera aquí */} 
            
            
            <div className="filter-container">
                <button className="filter-button">
                    <div className='filter-content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="filtro-logo" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                        </svg>
                        <h3>FILTRAR</h3>
                    </div>
                </button>
            </div>

            <div className="grid-container">
                {clothingItems.map(item => (
                    <ProductCard
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
