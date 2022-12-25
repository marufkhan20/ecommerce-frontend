import {
  AiFillFire,
  AiFillStar,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCart2, BsSuitHeart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";

const Header = () => {
  return (
    <header className="bg-[#f9f3f0] min-h-[100vh] overflow-hidden">
      <div className="container mx-auto">
        {/* header top */}
        <div className="flex justify-between items-center py-4">
          <div>
            <ul className="flex items-center gap-8">
              <li className="flex items-center gap-1 cursor-pointer">
                <span>English</span>
                <BiChevronDown />
              </li>
              <li className="flex items-center gap-1 cursor-pointer">
                <span>USD</span>
                <BiChevronDown />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-8">
              <li className="cursor-pointer">Help</li>
              <li className="cursor-pointer">Join Us</li>
              <li className="cursor-pointer">Sign In</li>
            </ul>
          </div>
        </div>

        {/* navigation */}
        <div className="flex justify-between items-center bg-white py-5 px-8 rounded-xl">
          <div>
            <Link to="/">
              <img src="/assets/logo.png" alt="logo" />
            </Link>
          </div>
          <div>
            <nav>
              <ul className="flex items-center gap-11 text-[15px] text-black font-bold">
                <li className="border-b-2 border-transparent hover:border-border-dark transition-all">
                  <Link to="/">Home</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-border-dark transition-all">
                  <Link to="/">Shop</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-border-dark transition-all">
                  <Link to="/">Pages</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-border-dark transition-all">
                  <Link to="/">About</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-border-dark transition-all">
                  <Link to="/">Blog</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-border-dark transition-all">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <li className="p-3 rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white text-black">
              <CiSearch className="text-2xl font-medium cursor-pointer" />
            </li>
            <li className="p-3 rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white text-black">
              <BsSuitHeart className="text-2xl font-medium cursor-pointer" />
            </li>
            <li className="p-3 rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white text-black">
              <BsCart2 className="text-2xl font-medium cursor-pointer" />
            </li>
            <li className="p-3 rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white text-black">
              <AiOutlineUser className="text-2xl font-medium cursor-pointer" />
            </li>
          </div>
        </div>

        {/* header banner */}
        <div className="flex items-center justify-between py-28">
          <div className="w-[40%]">
            <h5 className="text-secondary text-sm mb-4 flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-secondary text-white flex items-center justify-center">
                <AiFillFire />
              </span>
              Hot Deal In This Week
            </h5>
            <h2 className="text-6xl mb-12 leading-[1.2]">
              Smart Digital <br />
              Watch
            </h2>
            <div>
              <div className="flex items-center gap-8">
                <Button bg="white" link="/" color="[#292930]">
                  <span className="flex items-center gap-4 ">
                    <BsCart2 className="text-2xl font-medium cursor-pointer" />
                    <span>Shop Now</span>
                  </span>
                </Button>
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <img
                      className="border-2 rounded-full border-white"
                      src="/assets/users/author1.png"
                      alt="author"
                    />
                    <img
                      className="border-2 rounded-full border-white -ml-5"
                      src="/assets/users/author2.png"
                      alt="author"
                    />
                    <img
                      className="border-2 rounded-full border-white -ml-5"
                      src="/assets/users/author4.png"
                      alt="author"
                    />
                    <img
                      className="border-2 rounded-full border-white -ml-5"
                      src="/assets/users/author2.png"
                      alt="author"
                    />
                  </div>
                  <div>
                    <ul className="flex items-center gap-1">
                      <li>
                        <AiFillStar className="text-base text-[#ffa800]" />
                      </li>
                      <li>
                        <AiFillStar className="text-base text-[#ffa800]" />
                      </li>
                      <li>
                        <AiFillStar className="text-base text-[#ffa800]" />
                      </li>
                      <li>
                        <AiFillStar className="text-base text-[#ffa800]" />
                      </li>
                      <li>
                        <AiOutlineStar className="text-base text-[#ffa800]" />
                      </li>
                    </ul>
                    <span className="text-sm mt-1 block">
                      <span className="text-heading font-medium">100+ </span>
                      Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end w-[60%]">
            <div className="relative z-30">
              <img src="/assets/products/product-39.png" alt="product" />
              <div className="absolute top-[25%] left-[35%] h-[100px] w-[100px] rounded-full bg-white text-center flex items-center justify-center flex-col">
                <span className="text-base">From</span>
                <h3 className="text-[18px] text-primary">$49.00</h3>
              </div>
              <div className="absolute -bottom-[323px] -left-28 -z-10">
                <img src="/assets/shape-1.png" alt="shape" />
              </div>
            </div>
            <div className="relative z-30">
              <img
                className="w-44"
                src="/assets/products/product-38.png"
                alt="product"
              />
              <div className="absolute -bottom-[275px] -left-28 -z-10">
                <img src="/assets/shape-1.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
