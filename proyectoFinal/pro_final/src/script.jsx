async function obtenerProductos() {
    try {
        const api = await fetch("https://fakestoreapi.com/products");
        const formato = await api.json();
        return formato;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
}

export default obtenerProductos;