import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const FooterArea = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8 py-12 border-b border-border-light">
          <div>
            <h3 className="font-semibold text-lg mb-5">Support</h3>
            <p className="text-base mb-10">
              685 Market Street, <br />
              Las Vegas, LA 95820, <br />
              United States.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2 text-base transition cursor-pointer hover:text-heading">
                <TfiEmail />
                <span>example@domain.com</span>
              </li>
              <li className="flex items-center gap-2 text-base transition cursor-pointer hover:text-heading">
                <BsTelephone />
                <span>(+01) 850-315-5862</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">My Account</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Login / Register</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Cart</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Wishlist</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Shop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Link</h3>
            <ul>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">My Account</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Login / Register</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Cart</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Wishlist</Link>
              </li>
              <li className="font-semibold text-base mb-5 transition-all">
                <Link to="#">Shop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-5">Download App</h3>
            <span className="text-base">Save $3 With App & New User only</span>
            <div className="flex mt-5 items-center gap-4">
              <img src="/assets/footer/qr.png" alt="qr code" />
              <div className="flex items-center flex-col gap-3">
                <img
                  className="cursor-pointer"
                  src="/assets/footer/app-store.png"
                  alt="app store"
                />
                <img
                  className="cursor-pointer"
                  src="/assets/footer/play-store.png"
                  alt="play store"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 flex items-center justify-between gap-8">
          <ul className="flex items-center gap-5 text-lg">
            <li>
              <GrFacebookOption />
            </li>
            <li>
              <AiOutlineTwitter />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <AiFillGithub />
            </li>
          </ul>
          <p className="font-medium text-sm">
            © 2022. All rights reserved by Axilthemes.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-medium text-sm">Accept For</span>
            <div className="flex items-center gap-5">
              <img src="/assets/footer/cart-1.png" alt="cart" />
              <img src="/assets/footer/cart-2.png" alt="cart" />
              <img src="/assets/footer/cart-5.png" alt="cart" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;
