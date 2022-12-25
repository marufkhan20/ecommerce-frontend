import { BsInboxes } from "react-icons/bs";
import Products from "../Products/Products";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProductsArea = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle
          subTitle="Our Products"
          title="Explore our Products"
          icon={<BsInboxes />}
          color="light-primary"
        />
        <div className="mt-12">
          <Products />
        </div>
      </div>
    </section>
  );
};

export default ProductsArea;
