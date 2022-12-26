import { BsArrowRight } from "react-icons/bs";

const SpecialOfferArea = () => {
  return (
    <section className="mb-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-7">
          <div className="w-full overflow-hidden rounded-md relative">
            <img
              className="w-full hover:scale-110 rounded-md transition-all duration-500"
              src="/assets/special-offer/1.png"
              alt="poster"
            />
            <div className="absolute left-[50%] top-[50%] translate-y-[-50%]">
              <h2 className="mb-5 text-[40px] leading-[1] text-white">
                Rich sound, <br />
                for less.
              </h2>
              <div className="flex items-center gap-3 text-base text-white/40 hover:text-white cursor-pointer transition-all">
                <span>Collections</span>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-md relative">
            <img
              className="w-full hover:scale-110 rounded-md transition-all duration-500"
              src="/assets/special-offer/2.png"
              alt="poster"
            />

            <div className="absolute left-[60px] top-[50%] translate-y-[-50%]">
              <div className="flex items-center gap-3 text-base text-white/40 hover:text-white cursor-pointer transition-all">
                <span>50% Offer In Winter</span>
              </div>
              <h2 className="mt-3 text-[40px] leading-[1] text-white">
                Get VR <br />
                Reality Glass
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferArea;
