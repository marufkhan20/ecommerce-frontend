import CategoriesArea from "../components/Home/CategoriesArea";
import Header from "../components/Home/Header";
import NewArrivalsArea from "../components/Home/NewArrivalsArea";
import OfferArea from "../components/Home/OfferArea";
import ProductsArea from "../components/Home/ProductsArea";
import TestimonialsArea from "../components/Home/TestimonialsArea";

const Home = () => {
  return (
    <main>
      <Header />
      <CategoriesArea />
      <OfferArea />
      <ProductsArea />
      <TestimonialsArea />
      <NewArrivalsArea />
    </main>
  );
};

export default Home;
