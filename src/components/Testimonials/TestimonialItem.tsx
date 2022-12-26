import styles from "./testimonials.module.css";

interface IProps {
  text: String;
  image: String;
  name: String;
  status: String;
}

const TestimonialItem = ({ text, image, name, status }: IProps) => {
  return (
    <div>
      <div
        className={`bg-white py-11 px-9 rounded-xl relative ${styles.testiCard} z-40`}
      >
        <p className="text-base leading-[28px] z-30">`` {text} ``</p>
      </div>
      <div className="mt-11 flex items-center gap-5">
        <div>
          <img src={`/assets/users/${image}.png`} alt="user" />
        </div>
        <div>
          <span>{status}</span>
          <h4 className="text-lg">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
