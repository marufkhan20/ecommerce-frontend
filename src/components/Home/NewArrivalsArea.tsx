import { BsInboxes } from "react-icons/bs";
import NewArrivals from "../NewArrivals/NewArrivals";
import SectionTitle from "../SectionTitle/SectionTitle";

const NewArrivalsArea = () => {
  return (
    <section>
      <div className="container mx-auto border-b border-border-light py-20">
        <SectionTitle
          title="New Arrivals"
          subTitle="This Week’s"
          icon={<BsInboxes />}
          color="light-primary"
        />
        <div className="mt-12">
          <NewArrivals />
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsArea;
