let { getProducts, getProductById, addProduct } = require("./product");
const express = require("express");
const app = express();
const PORT = 3000;

app.get(express.json());

app.get("/products", (req, res)=>{
  res.json(getProducts());
});

app.get("/products/:id",  (req, res)=>{
 const product = getProductById(parseInt(req.params.id));
 if(!product) return res.status(404).send("Product Not Found");
 res.json(product);
});

app.post("/products", (req, res)=>{
  const product = addProduct(req.body);
  res.status(201).json(proeduct);
});

app.listen(PORT, () => {
  console.log("Server is running on Port " + PORT);
});

module.exports = app;