import { AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./products.module.css";

interface IProps {
  image: String;
  perchantOff?: Number;
  rating: Number;
  totalRating: Number;
  title: String;
  price: Number;
  oldPrice: Number;
}

const ProductItem = ({
  image,
  perchantOff,
  rating,
  totalRating,
  title,
  price,
  oldPrice,
}: IProps) => {
  return (
    <div className={`relative ${styles.product}`}>
      <div className="relative overflow-hidden">
        <img
          className="w-full h-full bg-[#F6F7FB] rounded-md transition-all hover:scale-110"
          src={`/assets/products/${image}`}
          alt={`${image}`}
        />
        <div
          className={`absolute -bottom-12 left-0 right-0 flex items-center justify-between w-[70%] mx-auto ${styles.cart}`}
        >
          <div className="h-9 w-12 bg-white rounded-md text-[#292930] flex items-center justify-center cursor-pointer transition-all hover:scale-110">
            <FaRegEye className="text-base" />
          </div>
          <button className="block py-2 px-5 bg-secondary text-white font-bold rounded-md cursor-pointer transition-all hover:scale-110">
            Add to Cart
          </button>
          <div className="h-9 w-12 bg-white rounded-md text-[#292930] flex items-center justify-center cursor-pointer transition-all hover:scale-110">
            <BiHeart className="text-base" />
          </div>
        </div>
      </div>
      {perchantOff && (
        <div className="absolute top-5 -right-2 bg-primary px-3 py-[3px] rounded-md shadow-sm shadow-primary">
          <span className="text-white text-xs font-bold">{`${perchantOff}% Off`}</span>
        </div>
      )}
      <div className="flex items-center gap-2 mt-5">
        <ul className="flex items-center text-[#ffdc60] text-base">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </ul>
        <span>{`(${totalRating})`}</span>
      </div>
      <h3 className="text-body text-base font-medium mt-3 mb-3 transition-all hover:text-primary cursor-pointer">
        <Link className="block" to="">
          {title}
        </Link>
      </h3>
      <div className="flex items-center gap-3 text-xl">
        <h4>{`$${price}`}.00</h4>
        {oldPrice && (
          <h4 className="text-[#d6d6d6]">
            <del>{`$${oldPrice}`}.00</del>
          </h4>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
