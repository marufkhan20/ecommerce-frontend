import MostSoldProductItem from "./MostSoldProductItem";

const MostSoldProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <MostSoldProductItem
        image="product-10.png"
        rating={5}
        totalRating={100}
        title="Media Remote"
        price={29.0}
      />
      <MostSoldProductItem
        image="product-04.png"
        rating={5}
        totalRating={100}
        title="Media Remote"
        price={29.0}
        oldPrice={49.99}
      />
      <MostSoldProductItem
        image="product-03.png"
        rating={5}
        totalRating={100}
        title="Media Remote"
        price={29.0}
        oldPrice={49.99}
      />
      <MostSoldProductItem
        image="product-06.png"
        rating={5}
        totalRating={100}
        title="Media Remote"
        price={29.0}
      />

      <MostSoldProductItem
        image="product-04.png"
        rating={5}
        totalRating={100}
        title="Media Remote"
        price={29.0}
        oldPrice={49.99}
      />
      <MostSoldProductItem
        image="product-03.png"
        rating={5}
        totalRating={100}
        title="Media Remote"
        price={29.0}
        oldPrice={49.99}
      />
    </div>
  );
};

export default MostSoldProducts;
