import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { PiGlobe } from "react-icons/pi";
import logo from "../assets/tesla.svg";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <img src={logo} alt="Tesla" />
        </li>
        <li>Vehicles</li>
        <li>Energy</li>
        <li>Charging</li>
        <li>Discover</li>
        <li>Shop</li>

        <li>
          <li>
            <GrCircleQuestion />
          </li>
          <li>
            <PiGlobe />
          </li>
          <li>
            <CgProfile />
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
