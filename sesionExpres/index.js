const expres = require('express'); 
const app = expres();
const port = 1029;

app.get('/', (req, res) => {
    res.send('hellow word!');
});

app.get("/about", (req, res) => {
  res.send("sobre la compañia");
});  

app.get("/contact", (req, res) => {
  res.send("contactanos");
}); 

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})