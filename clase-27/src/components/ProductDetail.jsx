import { Link, useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, loading, error, setError } = useProduct(id);

  if (loading) {
    return <p className="message">Cargando producto...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="error">{error}</p>
        <button type="button" onClick={() => setError(null)}>
          Recargar
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <section className="product-detail">
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver</Link>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <h2>Detalle de producto</h2>

      <article>
        <h3>{product.name}</h3>
        <p>$ {product.price}</p>
        <p>Stock: {product.stock}</p>
      </article>

      <button onClick={() => navigate("/")}>Volver</button>
    </section>
  );
}

export default ProductDetail;