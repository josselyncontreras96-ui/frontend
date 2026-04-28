import CategoryCard from "./CategoryCard";

function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </ul>
  );
}

export default CategoryList;