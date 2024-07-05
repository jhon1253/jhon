// server.js

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Ruta para obtener y mostrar los productos desde la API
app.get('/productos', async (req, res) => {
    try {
        // Hacer la solicitud a la API
        const response = await axios.get('https://fakestoreapi.com/products');

        // Devolver los productos obtenidos como JSON
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
