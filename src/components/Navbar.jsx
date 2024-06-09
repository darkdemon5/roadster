import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { PiGlobe } from "react-icons/pi";
import logo from "../assets/tesla.svg";

const Navbar = () => {
  return (
    <div className=" h-10 w-full">
      <ul>
        <li>
          <img src={logo} alt="Tesla" className="w-[160px]" />
        </li>
        <li>Vehicles</li>
        <li>Energy</li>
        <li>Charging</li>
        <li>Discover</li>
        <li>Shop</li>

        <ul>
          <li>
            <GrCircleQuestion />
          </li>
          <li>
            <PiGlobe />
          </li>
          <li>
            <CgProfile />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
