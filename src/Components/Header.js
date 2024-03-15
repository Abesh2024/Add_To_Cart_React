import React from "react";
import "./Header.css"
import { FaCartArrowDown } from "react-icons/fa";

const Header = ({ quantity }) => {
  return (
    <div className = "nav-style">
      <ul className="nav">
        <li className = "nav-head">AddYourBag</li>
        <li>
          <FaCartArrowDown className="cart_icon" />
          <span className="cart_quantity">{quantity}</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
