import React from 'react';
import './FiltroCatalogo.css';

const FiltroCatalogo = ({ onFilterChange, filters }) => {
    const { price, colors, categories } = filters; // Desestructuración de los filtros

    const handleColorChange = (e) => {
        const color = e.target.value;
        const updatedColors = color ? [color] : []; // Solo se permite un color a la vez

        onFilterChange({ price, colors: updatedColors, categories }); // Llama a la función de cambio de filtros
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        const updatedCategories = category ? [category] : []; // Solo se permite una categoría a la vez

        onFilterChange({ price, colors, categories: updatedCategories }); // Llama a la función de cambio de filtros
    };

    const handlePriceChange = (e) => {
        const newPrice = e.target.value ? parseFloat(e.target.value) : null;
        onFilterChange({ price: newPrice, colors, categories }); // Llama a la función de cambio de filtros
    };

    const priceOptions = [29.99, 49.99, 79.99, 99.99]; // Precios sugeridos
    const colorOptions = ['Rojo', 'Azul', 'Negro', 'Verde', 'Blanco']; // Colores sugeridos
    const categoryOptions = ['Camisa', 'Pantalón', 'Zapatos', 'Chaqueta']; // Categorías sugeridas

    const resetFilters = () => {
        onFilterChange({ price: null, colors: [], categories: [] }); // Restablece los filtros
    };

    return (
        <div className="filter-container">
            <div className="filter-item">
                <label>Precio:</label>
                <select className="price-select" value={price || ''} onChange={handlePriceChange}>
                    <option value="">Selecciona un precio</option>
                    {priceOptions.map(priceOption => (
                        <option key={priceOption} value={priceOption}>
                            Hasta ${priceOption}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-item">
                <label>Color:</label>
                <select value={colors[0] || ''} onChange={handleColorChange}>
                    <option value="">Selecciona un color</option>
                    {colorOptions.map(color => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-item">
                <label>Categoría:</label>
                <select value={categories[0] || ''} onChange={handleCategoryChange}>
                    <option value="">Selecciona una categoría</option>
                    {categoryOptions.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <button className="reset-filters-button" onClick={resetFilters}>
                Limpiar Filtros
            </button>
        </div>
    );
};

export default FiltroCatalogo;
