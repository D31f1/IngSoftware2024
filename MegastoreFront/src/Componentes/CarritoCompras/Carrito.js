const Carrito = ({ carrito }) => {
    // Si el carrito está indefinido, asegúrate de inicializarlo como un array vacío
    const items = carrito || [];

    return (
        <div>
            <h1>Tu Carrito</h1>
            {items.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item.nombre} - {item.precio}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Carrito;
