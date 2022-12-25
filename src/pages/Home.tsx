import CategoriesArea from "../components/Home/CategoriesArea";
import Header from "../components/Home/Header";
import OfferArea from "../components/Home/OfferArea";
import ProductsArea from "../components/Home/ProductsArea";

const Home = () => {
  return (
    <main>
      <Header />
      <CategoriesArea />
      <OfferArea />
      <ProductsArea />
    </main>
  );
};

export default Home;
