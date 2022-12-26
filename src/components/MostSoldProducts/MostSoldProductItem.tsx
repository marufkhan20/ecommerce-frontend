import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

interface IProps {
  image: String;
  rating: Number;
  totalRating: Number;
  title: String;
  price: Number;
  oldPrice?: Number;
}

const MostSoldProductItem = ({
  image,
  rating,
  totalRating,
  title,
  price,
  oldPrice,
}: IProps) => {
  return (
    <div className="py-6 px-8 rounded-md border border-border-light flex items-center gap-7 w-full hover:shadow-lg transition-all duration-200">
      <div className="w-36 overflow-hidden">
        <img
          className="w-36 h-28 rounded-md hover:scale-110 transition-all duration-200"
          src={`/assets/products/${image}`}
          alt="product"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-2">
            <ul className="flex items-center gap-1 font-bold text-sm text-[#ffa800]">
              <li>
                <AiFillStar />
              </li>
              <li>
                <AiFillStar />
              </li>
              <li>
                <AiFillStar />
              </li>
              <li>
                <AiFillStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
            </ul>
            <span className="font-medium text-xs">
              <span className="text-black">{`${totalRating}`}+</span> Reviews
            </span>
          </div>
          <h4 className="font-medium text-base text-body mt-3 transition-all hover:text-primary">
            <Link to="#">{title}</Link>
          </h4>
          <div className="flex items-center gap-4 mt-4 text-xl">
            <h3>{`$${price}`}</h3>
            {oldPrice && (
              <h3 className="text-[#d6d6d6]">
                <del>{`$${oldPrice}`}</del>
              </h3>
            )}
          </div>
        </div>
        <div className="flex items-center flex-col gap-2">
          <li className="w-10 h-10 transition-all rounded-md border border-border-light flex justify-center items-center text-base cursor-pointer hover:text-white hover:bg-primary hover:border-transparent text-heading">
            <AiOutlineShoppingCart />
          </li>
          <li className="w-10 h-10 transition-all rounded-md border border-border-light flex justify-center items-center text-base cursor-pointer hover:text-white hover:bg-primary hover:border-transparent text-heading">
            <CiHeart />
          </li>
        </div>
      </div>
    </div>
  );
};

export default MostSoldProductItem;
