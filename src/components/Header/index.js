import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import useOnline from "../../Hooks/useOnline";

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="flex text-black-400 font-semibold justify-between h-50 items-center">
      <div className="bg-black">
        <img
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
          alt="logo"
          className="w-20"
        />
      </div>
      <div className="flex h-10 justify-between">
        <h1 className="ml-1 mr-5">Online Status : {isOnline ? "✅" : "🔴"}</h1>
        <Link to="/">
          <div className="flex items-center justify-around">
            <h1>Home</h1>

            <FaHome className="ml-1 mr-5" />
          </div>
        </Link>
        <Link to="/contactus">
          <div className="flex items-center justify-around">
            <h1>Contact Us</h1>

            <FaQuestionCircle className="ml-1 mr-5" />
          </div>
        </Link>
        <Link to="/aboutus">
          <div className="flex items-center justify-around">
            <h1>About Us</h1>

            <IoIosContacts className="ml-1 mr-5" />
          </div>
        </Link>
        <Link to="/cart">
          <div className="flex items-center justify-around">
            <h1>Cart</h1>
            <MdShoppingCart className="ml-1 mr-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
