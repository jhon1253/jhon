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
  const platform = os.platform(); 
  console.log(platform); //win 32
  res.send(`${platform}`);
});


app.get("/type", (req, res) => {
  const nameOs = os.type();
  console.log(nameOs);
  res.send(`${nameOs}`);
});


app.get("/uptimeOS", (req, res) => {
  const uptimeOS = os.uptime();
  console.log(uptimeOS); // 95156
  res.send(`${uptimeOS}`); //corr
});

//de

app.get("/arch", (req, res) => {
  const cpuArchitecture = os.arch();
  res.send(cpuArchitecture);
});

app.get("/totalMem", (req, res) => {
  const totalMemory = os.totalmem();
  // console.log(totalMemory); 
  res.send(totalMemory); 
});

// app.get("/networkInterfaces", (req, res) => {
//   const networkInfo = os.networkInterfaces();
//   console.log(networkInfo);
//   res.send(networkInfo);
// });

app.get("/networkInterfaces", (req, res) => {
  const networkInfo = os.networkInterfaces();
  res.json(networkInfo); // Enviar como JSON
});


//de


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
