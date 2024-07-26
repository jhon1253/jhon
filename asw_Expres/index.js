const express = require('express');
const axios = require('axios');
const bodyParser = require("body-parser");


const app = express ();
const port = 3000;

app.use(bodyParser.json());

let dataCache = null;

app.get('/store', async(req, res) => {
    try {
        const response = await axios.get(URL-API)
        dataCache = response.dataCache
        res.send('Datos obtenidos y almaceados en memoria')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al obtener los datos');
    }
});


app.get('/get-data', (req, res) =>{
    dataCache 
    ? res.json(dataCache) 
    : res.status(404).send("No hay datos almacenados");
});

app.listen(port, () => {
    console.log(`servidor http://localhost:${port}`);
});