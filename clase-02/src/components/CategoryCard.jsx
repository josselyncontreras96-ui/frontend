function CategoryCard({ category }) {
  const { name } = category;

  return (
    <li>
      <h2>{name}</h2>
    </li>
  );
}

export default CategoryCard;