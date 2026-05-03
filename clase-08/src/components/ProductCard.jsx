import "./ProductCard.css";

function ProductCard({ product, onSelectProduct }) {
  return (
    <article className="product-card" onClick={() => onSelectProduct(product)}>
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
    </article>
  );
}

export default ProductCard;