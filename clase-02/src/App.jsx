import "./App.css";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import { useState } from "react";
import Saludar from "./components/Saludar";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 50, category: "Accessories" },
    { id: 3, name: "Keyboard", price: 80, category: "Electronics" },
    { id: 4, name: "Monitor", price: 300, category: "Monitors" },
  ]);

  const [newProductName, setNewProductName] = useState("");

  const addProduct = () => {
    // null, undefined, 0, ''
    if (!newProductName.trim()) return;

    const newProduct = {
      id: Date.now(), // Dice que es una función impura
      name: newProductName,
      price: 350,
      category: "Monitors",
    };

    console.log(newProduct);

    // products.push(newProduct);
    setProducts([...products, newProduct]);
    setNewProductName("");

    console.log(products);
  };

  const [categories, setCategories] = useState([
    { id: 1, name: "Tecnología" },
    { id: 2, name: "Audio" },
    { id: 3, name: "Accesorios" },
  ]);

  const addCategory = () => {
    const newCategory = { id: Date.now(), name: newCategoryName };
    setCategories([...categories, newCategory]);
    setNewCategoryName("");
  };

  const [newCategoryName, setNewCategoryName] = useState("");

  return (
    <>
      <Saludar />

      <Title title="Listado de productos" />

      <ProductList products={products} />

      <p>{newProductName}</p>

      <input
        type="text"
        value={newProductName}
        onChange={(event) => setNewProductName(event.target.value)}
        onKeyDown={(e) => e.key == "Enter" && addProduct()}
      />

      <button onClick={addProduct}>Agregar producto</button>

      <Subtitle title="Listado de categorías" />

      <h3 className="ticks">Algo</h3>

      <CategoryList categories={categories} />

      <p>{newCategoryName}</p>

      <input
        type="text"
        value={newCategoryName}
        onChange={(event) => setNewCategoryName(event.target.value)}
      />

      <button onClick={addCategory}>Agregar categoría</button>

      <Footer company="Una empresa" />
    </>
  );
}

export default App;
