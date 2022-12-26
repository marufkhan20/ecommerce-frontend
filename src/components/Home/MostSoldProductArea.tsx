import { BsFillStarFill } from "react-icons/bs";
import MostSoldProducts from "../MostSoldProducts/MostSoldProducts";
import SectionTitle from "../SectionTitle/SectionTitle";

const MostSoldProductArea = () => {
  return (
    <section>
      <div className="container mx-auto py-20 border-b border-border-light">
        <SectionTitle
          subTitle="Most Sold"
          title="Most Sold in eTrade Store"
          center={true}
          icon={<BsFillStarFill />}
          color="light-primary"
        />

        <div className="mt-12">
          <MostSoldProducts />
        </div>
      </div>
    </section>
  );
};

export default MostSoldProductArea;
