import { BsInboxes } from "react-icons/bs";
import Products from "../Products/Products";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../common/Button/Button";

const ProductsArea = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle
          subTitle="Our Products"
          title="Explore our Products"
          icon={<BsInboxes />}
          color="lightPrimary"
        />
        <div className="mt-12">
          <Products />
        </div>
        <div className="mt-20 text-center">
          <Button link="/products" bg="lighter" color="body">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsArea;
