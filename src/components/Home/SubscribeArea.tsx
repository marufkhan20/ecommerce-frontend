import { MdEmail } from "react-icons/md";
import SectionTitle from "../SectionTitle/SectionTitle";

const SubscribeArea = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div
          className="p-24 w-full rounded-md"
          style={{
            backgroundImage: "url(/assets/bg/bg-image-5.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SectionTitle
            subTitle="Newsletter"
            title="Get weekly update"
            icon={<MdEmail />}
            color="lightPrimary"
          />
          <div className="mt-12">
            <form className="flex items-center gap-5">
              <input
                className="py-4 px-9 outline-none rounded-md w-[400px] focus:ring-2"
                type="text"
                placeholder="example@gmail.com"
              />
              <button
                className="block py-4 px-9 bg-heading text-white rounded-md font-bold cursor-pointer transition-all hover:scale-110 duration-300"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeArea;
