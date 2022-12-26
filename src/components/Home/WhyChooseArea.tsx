import { AiOutlineLike } from "react-icons/ai";
import SectionTitle from "../SectionTitle/SectionTitle";
import WhyChoose from "../WhyChoose/WhyChoose";

const WhyChooseArea = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle
          subTitle="Why Us"
          title="Why People Choose Us"
          center={true}
          icon={<AiOutlineLike />}
          color="secondary"
        />
        <div className="mt-10">
          <WhyChoose />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseArea;
