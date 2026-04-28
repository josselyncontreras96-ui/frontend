function ProductCard({ product }) {
  const { name, price, category } = product;

  return (
    <div
      key={product.id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "150px",
      }}
    >
      <h2>{name}</h2>
      <p>$ {price}</p>
      <p>{category}</p>
    </div>
  );
}

export default ProductCard;