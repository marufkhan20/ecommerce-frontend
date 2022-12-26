import CategoriesArea from "../components/Home/CategoriesArea";
import Header from "../components/Home/Header";
import MostSoldProductArea from "../components/Home/MostSoldProductArea";
import NewArrivalsArea from "../components/Home/NewArrivalsArea";
import OfferArea from "../components/Home/OfferArea";
import ProductsArea from "../components/Home/ProductsArea";
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
    </main>
  );
};

export default Home;
