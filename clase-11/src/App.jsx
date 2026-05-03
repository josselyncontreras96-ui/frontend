import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts =  () => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener lo productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <p className="message">Cargando productos...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <main className="container">
      <h1>Clase 11</h1>

      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <Link to="/products/new">Nuevo producto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetail products={products} />}
        />
        <Route
          path="/products/new"
          element={<ProductForm loadProducts={loadProducts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;