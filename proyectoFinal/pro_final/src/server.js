
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// Ruta para obtener y mostrar los productos
app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    // Renderizar los productos (puedes adaptar esto según tu método de renderizado, por ejemplo, con EJS, Pug, etc.)
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Hubo un error al obtener los productos' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});