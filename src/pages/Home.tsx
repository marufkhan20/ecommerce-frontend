import CategoriesArea from "../components/Home/CategoriesArea";
import Header from "../components/Home/Header";
import MostSoldProductArea from "../components/Home/MostSoldProductArea";
import NewArrivalsArea from "../components/Home/NewArrivalsArea";
import OfferArea from "../components/Home/OfferArea";
import ProductsArea from "../components/Home/ProductsArea";
import ServiceArea from "../components/Home/ServiceArea";
import SpecialOfferArea from "../components/Home/SpecialOfferArea";
import SubscribeArea from "../components/Home/SubscribeArea";
import TestimonialsArea from "../components/Home/TestimonialsArea";
import WhyChooseArea from "../components/Home/WhyChooseArea";

const Home = () => {
  return (
    <main>
      <Header />
      <CategoriesArea />
      <OfferArea />
      <ProductsArea />
      <TestimonialsArea />
      <NewArrivalsArea />
      <MostSoldProductArea />
      <WhyChooseArea />
      <SpecialOfferArea />
      <SubscribeArea />
      <ServiceArea />
    </main>
  );
};

export default Home;
