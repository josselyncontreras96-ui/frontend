function ProductDetail({ product, onBack }) {
  return (
    <>
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <p>Stock: {product.stock}</p>

      <button onClick={() => onBack(null)}>Volver</button>
    </>
  );
}

export default ProductDetail;