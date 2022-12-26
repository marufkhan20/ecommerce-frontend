import { BsInboxes } from "react-icons/bs";
import SectionTitle from "../SectionTitle/SectionTitle";

const NewArrivalsArea = () => {
  return (
    <section className="py-">
      <div className="container mx-auto">
        <SectionTitle
          subTitle="This Week’s"
          title="New Arrivals"
          icon={<BsInboxes />}
          color="light-primary"
        />
      </div>
    </section>
  );
};

export default NewArrivalsArea;
