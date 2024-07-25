const os = require("os");
const express = require("express"); // libreria expres
const app = express(); //a app le pasan como valor f vacia
const port = 3000; // ruta

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/name", (req, res) => {
  res.send("sebastian quinayas");
});


app.get("/platform", (req, res) => {
  const platform = os.platform(); // Corregido
  console.log(platform); // win32
  res.send(platform);
});


app.get("/type", (req, res) => {
  const nameOs = os.type();

  console.log(nameOs);
  res.send(nameOs);
});


app.get("/uptimeOS", (req, res) => {
  const status = os.uptime();
  console.log(status); // 95156
  res.sendStatus(status);
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
