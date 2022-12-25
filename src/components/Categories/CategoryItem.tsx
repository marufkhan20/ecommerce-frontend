interface IProps {
  image: String;
  category: String;
}

const CategoryItem = ({ image, category }: IProps) => {
  return (
    <div className="text-center py-8 border border-border-light rounded-md transition-all ease-in-out duration-200 hover:scale-110 cursor-pointer hover:shadow-md">
      <img
        className="mx-auto"
        src={`/assets/categories/${image}`}
        alt={`${image}`}
      />
      <h5 className="mt-3 text-base font-medium">{category}</h5>
    </div>
  );
};

export default CategoryItem;
