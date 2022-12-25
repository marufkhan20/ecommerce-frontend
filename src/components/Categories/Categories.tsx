import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="grid grid-cols-7 gap-6">
      <CategoryItem image="net.png" category="Networking" />
      <CategoryItem image="gaming.png" category="PC Gaming" />
      <CategoryItem image="watch.png" category="Smartwatches" />
      <CategoryItem image="headphone.png" category="Headphones" />
      <CategoryItem image="camera.png" category="Camera & Photo" />
      <CategoryItem image="games.png" category="Video Games" />
      <CategoryItem image="sports.png" category="Sports" />
    </div>
  );
};

export default Categories;
