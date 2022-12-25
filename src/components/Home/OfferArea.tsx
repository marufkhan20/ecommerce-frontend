import { GiHeadphones } from "react-icons/gi";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../common/Button/Button";

const OfferArea = () => {
  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="bg-lighter rounded-xl py-16 px-20 flex justify-between">
          <div>
            <SectionTitle
              subTitle="Don’t Miss!!"
              icon={<GiHeadphones />}
              color="secondary"
            />
            <h2 className="text-5xl mt-6 leading-[1.3]">
              Enhance Your <br />
              Music Experience
            </h2>
            <div className="mt-11">
              <ul className="flex items-center gap-4">
                <li className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-col">
                  <h5 className="text-2xl text-black font-medium">0</h5>
                  <span>Day</span>
                </li>
                <li className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-col">
                  <h5 className="text-2xl text-black font-medium">0</h5>
                  <span>Hrs</span>
                </li>
                <li className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-col">
                  <h5 className="text-2xl text-black font-medium">0</h5>
                  <span>Min</span>
                </li>
                <li className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-col">
                  <h5 className="text-2xl text-black font-medium">0</h5>
                  <span>Sec</span>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <Button bg="primary" link="/">
                Check it Out!
              </Button>
            </div>
          </div>
          <div>
            <img
              className="-mt-40 mr-24"
              src="/assets/products/poster-03.png"
              alt="poster"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferArea;
