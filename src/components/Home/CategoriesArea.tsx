import { BiCategoryAlt } from "react-icons/bi";
import Categories from "../Categories/Categories";
import SectionTitle from "../SectionTitle/SectionTitle";

const CategoriesArea = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle
          subTitle={"Categories"}
          title={"Browse by Category"}
          icon={<BiCategoryAlt />}
          color="secondary"
        />

        <div className="mt-11">
          <Categories />
        </div>
      </div>
    </section>
  );
};

export default CategoriesArea;
