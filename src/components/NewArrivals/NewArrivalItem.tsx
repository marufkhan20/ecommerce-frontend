import { BiHeart } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewArrivalItem = () => {
  return (
    <div className="text-center">
      <div className="w-[275] h-[275] overflow-hidden rounded-full">
        <img
          className="w-[275] h-[275] rounded-full transition-all hover:scale-110"
          src="/assets/products/product-10.png"
          alt="product"
        />
      </div>
      <div className="mt-6">
        <ul className="flex items-center gap-1 justify-center">
          <li className="cursor-pointer border-2 border-[#ff8666] rounded-full ">
            <span className="bg-[#ff8666] w-[8px] h-[8px]  rounded-full block m-1"></span>
          </li>
          <li className="cursor-pointer border-2 border-transparent rounded-full ">
            <span className="bg-primary w-[8px] h-[8px]  rounded-full block m-1"></span>
          </li>
          <li className="cursor-pointer border-2 border-transparent rounded-full ">
            <span className="bg-secondary w-[8px] h-[8px] rounded-full block m-1"></span>
          </li>
        </ul>
        <h3 className="text-base font-medium text-body my-5 hover:text-primary transition-all">
          <Link to="#">Demon's Souls</Link>
        </h3>
        <div className="flex items-center gap-4 justify-center mb-7">
          <h3 className="text-xl text-[#d6d6d6]">
            <del>$40</del>
          </h3>
          <h3 className="text-xl">$30</h3>
        </div>
        <div className="">
          <div className="flex items-center justify-between w-[70%] mx-auto">
            <div className="h-9 w-12 bg-white rounded-md text-[#292930] flex items-center justify-center cursor-pointer transition-all hover:scale-110 shadow-md duration-200">
              <FaRegEye className="text-base" />
            </div>
            <button className="block py-2 px-5 bg-secondary text-white font-bold rounded-md cursor-pointer transition-all hover:scale-110 shadow-md duration-200">
              Add to Cart
            </button>
            <div className="h-9 w-12 bg-white rounded-md text-[#292930] flex items-center justify-center cursor-pointer transition-all hover:scale-110 shadow-md duration-200">
              <BiHeart className="text-base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalItem;
