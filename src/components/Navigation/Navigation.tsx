import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2, BsSuitHeart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import SearchBox from "../Home/SearchBox";

const Navigation = () => {
  const [navBg, setNavBg] = useState(false);
  const [searchBox, setSearchBox] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 70) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <nav
      className={`fixed ${
        navBg ? "top-3" : "top-14"
      } left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="container mx-auto">
        <div
          className={`flex justify-between items-center bg-white py-5 px-8 rounded-xl ${
            navBg && "shadow-lg"
          }`}
        >
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
            <li
              className="p-3 rounded-full transition-all hover:bg-secondary cursor-pointer hover:text-white text-black"
              onClick={() => setSearchBox(true)}
            >
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
      </div>

      {/* search box */}
      <SearchBox searchBox={searchBox} setSearchBox={setSearchBox} />
    </nav>
  );
};

export default Navigation;
