import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import Testimonials from "../Testimonials/Testimonials";

const TestimonialsArea = () => {
  return (
    <section className="py-20 bg-[#F9F3F0]">
      <div className="container mx-auto">
        <SectionTitle
          subTitle="Testimonials"
          title="Users Feedback"
          icon={<FaQuoteLeft />}
          color="secondary"
        />

        <div className="mt-12">
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsArea;
