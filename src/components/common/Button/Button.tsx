import { Link } from "react-router-dom";

interface IProps {
  children: any;
  link: String;
  bg: String;
  color?: String;
}

const Button = ({ link, bg, color, children }: IProps) => {
  return (
    <Link
      to={`${link}`}
      className={`inline-block py-5 px-9 rounded-md bg-${bg} text-base ${
        color ? `text-${color}` : "text-white"
      } font-bold hover:scale-110 transition-all duration-200`}
    >
      {children}
    </Link>
  );
};

export default Button;
