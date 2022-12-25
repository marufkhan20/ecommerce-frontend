import { BiCategoryAlt } from "react-icons/bi";
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
      </div>
    </section>
  );
};

export default CategoriesArea;
