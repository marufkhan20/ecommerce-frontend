import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="grid grid-cols-4 gap-6 gap-y-14">
      <ProductItem
        image="product-03.png"
        perchantOff={20}
        rating={5}
        totalRating={64}
        title="Ella Everyday Tote"
        price={155}
        oldPrice={255}
      />
      <ProductItem
        image="product-04.png"
        perchantOff={20}
        rating={5}
        totalRating={64}
        title="Ella Everyday Tote"
        price={155}
        oldPrice={255}
      />
      <ProductItem
        image="product-05.png"
        perchantOff={20}
        rating={5}
        totalRating={64}
        title="Ella Everyday Tote"
        price={155}
        oldPrice={255}
      />
      <ProductItem
        image="product-06.png"
        rating={5}
        totalRating={64}
        title="Ella Everyday Tote"
        price={155}
        oldPrice={255}
      />
      <ProductItem
        image="product-06.png"
        rating={5}
        totalRating={64}
        title="Ella Everyday Tote"
        price={155}
        oldPrice={255}
      />
      <ProductItem
        image="product-06.png"
        rating={5}
        totalRating={64}
        title="Ella Everyday Tote"
        price={155}
        oldPrice={255}
      />
    </div>
  );
};

export default Products;
