import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import MostSoldProductItem from "../MostSoldProducts/MostSoldProductItem";

interface IProps {
  searchBox: Boolean;
  setSearchBox: Function;
}

const SearchBox = ({ searchBox, setSearchBox }: IProps) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50 flex items-center justify-center transition-all
     duration-500 ${searchBox ? "scale-100" : "scale-0"}`}
    >
      <div className="bg-white w-1/2 rounded-lg py-10 px-9 relative">
        <div
          className="bg-white absolute top-0 -right-16 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-base font-bold"
          onClick={() => setSearchBox(false)}
        >
          <AiOutlineClose />
        </div>

        <div className="flex items-center gap-4 rounded-md border border-[#f1f1f1] px-4">
          <AiOutlineSearch />
          <input
            className="bg-transparent border-none outline-none py-4 block w-full placeholder:text-heading text-[15px]"
            type="text"
            placeholder="Write Something..."
          />
        </div>
        <div className="flex justify-between gap-8 mt-8 pb-5 text-heading border-b border-[#f1f1f1]">
          <span>24 Result Found</span>
          <Link
            className="transition-all border-b border-transparent hover:border-black"
            to="#"
          >
            View All
          </Link>
        </div>

        <div className="flex flex-col gap-5 mt-5">
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
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
