const { title } = require("process");
let { getProducts, getProductById, addProduct } = require("../product");

describe("Products Function", () => {
  it("Should get all products", () => {
    let products = getProducts();
    expect(products.length).toBe(4);
    expect(products).toEqual([
      { 'id': 1, 'name': 'Laptop', 'category': 'Electronics' },
      { 'id': 2, 'name': 'Coffee Maker', 'category': 'Appliances' },
      { 'id': 3, 'name': 'Headphones', 'category': 'Electronics' },
      { 'id': 4, 'name': 'Running Shoes', 'category': 'Footwear' }
    ]);
  });

  it("Should return a product by Id", () => {
    let product = getProductById(1);
    expect(product).toEqual( { 'id': 1, 'name': 'Laptop', 'category': 'Electronics' });
  });

  it("Should return undefined for a non-exitent product", () => {
    let product = getProductById(99);
    expect(product).toBeUndefined();
  });
  
  it("Should add a new product", () => {
    let newProduct = {name: "New Product", category: "New Category"};
    let addedProduct = addProduct(newProduct);
    expect(addedProduct).toEqual({ id: 5, name: 'New Product', category: "New Category" });

    const products = getProducts();
    expect(products.length).toEqual(5);
  });
});