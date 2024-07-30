const expres = require('express');
const { parse } = require('path');
const app = expres();
const port = 3000;

const products = [
  { id: 1, model: "MT-07", color: "Rojo", cilindrada: 689, categoryId: 4, motorcycles: 1, price: 7500000 },
  { id: 2, model: "CBR600RR", color: "Azul", cilindrada: 599, categoryId: 1, motorcycles: 2, price: 9500000 },
  { id: 3, model: "GSX-R600", color: "Negro", cilindrada: 599, categoryId: 1, motorcycles: 3, price: 9300000 },
  { id: 4, model: "MT-09", color: "Gris", cilindrada: 847, categoryId: 4, motorcycles: 1, price: 9800000 },
  { id: 5, model: "CBR1000RR", color: "Blanco", cilindrada: 999, categoryId: 1, motorcycles: 2, price: 12000000 },
  { id: 6, model: "Ninja ZX-6R", color: "Verde", cilindrada: 636, categoryId: 4, motorcycles: 4, price: 8500000 },
  { id: 7, model: "Ducati Panigale V4", color: "Rojo", cilindrada: 1103, categoryId: 1, motorcycles: 5, price: 23000000 },
  { id: 8, model: "KTM 390 Duke", color: "Naranja", cilindrada: 373, categoryId: 4, motorcycles: 6, price: 4500000 }
];

const categories = [
  { id: 1, name: "Deportivas" },
  { id: 2, name: "Cruiser" },
  { id: 3, name: "Touring" },
  { id: 4, name: "Naked" },
  { id: 5, name: "Adventure" },
];


const brand = [
  { id: 1, name: "Yamaha" },
  { id: 2, name: "Honda" },
  { id: 3, name: "Suzuki" },
  { id: 4, name: "Kawasaki" },
  { id: 5, name: "Ducati" },
  { id: 6, name: "KTM" },
];



app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/brand", (req, res) => {
  res.json(brand);
});



app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);



product ? res.json(product) : res.status(404).json({ message: "Product not found" });

});

app.get("/categories/:id", (req, res) => {
  const categoriId = parseInt(req.params.id);
  const categori = categories.find((p) => p.id === categoriId);

  
  categori ? res.json(categori) : res.status(404).json({ message: "Product not found" });
});

app.listen(port, () => {
  console.log(`servidor http://localhost:${port}`);
});

