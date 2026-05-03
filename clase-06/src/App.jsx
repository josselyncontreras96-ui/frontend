import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  // let loading = true;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function loadProducts() {
    setLoading(true);
    setError("");

    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) throw new Error("No se pueden cargar los productos");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        // loading = false;
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h1>Clase 06</h1>

      <button onClick={loadProducts}>Recargar Productos</button>

      <section>
        <h2>Productos</h2>

        {error && <p>{error}</p>}

        {loading && <p>Cargando productos...</p>}

        <div>
          {products.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>$ {product.price}</p>
            </div>
          ))}
        </div>

        <p>Cantidad: {products.length}</p>
      </section>
    </>
  );
}

export default App;
