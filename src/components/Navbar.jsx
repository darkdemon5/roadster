import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { PiGlobe } from "react-icons/pi";
import logo from "../assets/tesla.svg";

const Navbar = () => {
  return (
    // <div className="mx-auto px-4 py-2 lg:px-8 lg:py-4">
    //   {/* <ul className="mx-auto flex items-center justify-between text-blue-gray-900"> */}
    //   <div className="float-left">
    //     <li>
    //       <a href="https://www.tesla.com/roadster">
    //         <img src={logo} alt="Tesla" className="w-[160px] p-4" />
    //       </a>
    //     </li>
    //   </div>
    //   <div className="mx-auto flex justify-between list-none">
    //     <li>Vehicles</li>
    //     <li>Energy</li>
    //     <li>Charging</li>
    //     <li>Discover</li>
    //     <li>Shop</li>
    //   </div>
    //   <div>
    //     <ul className="list-none">
    //       <li>
    //         <GrCircleQuestion />
    //       </li>
    //       <li>
    //         <PiGlobe />
    //       </li>
    //       <li>
    //         <CgProfile />
    //       </li>
    //     </ul>
    //   </div>
    //   {/* </ul> */}
    // </div>

    <div className="grid grid-cols-3 flex">
      <div className="float-left ml-6 my-3">
        <a href="https://www.tesla.com/roadster">
          <img src={logo} alt="Tesla" className="w-[160px] p-4" />
        </a>
      </div>
      <div className="content-center">
        <ul className="flex items-center justify-center ">
          <li className="px-4">Vehicles</li>
          <li className="px-4">Energy</li>
          <li className="px-4">Charging</li>
          <li className="px-4">Discover</li>
          <li className="px-4">Shop</li>
        </ul>
      </div>
      <div className="content-center ">
        <ul className="flex items-end justify-end mr-6">
          <li className="mr-2">
            <GrCircleQuestion size={30} />
          </li>
          <li className="mr-2">
            <PiGlobe size={30} />
          </li>
          <li>
            <CgProfile size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
