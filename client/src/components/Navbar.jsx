import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-start items-center p-4 ">
    <div className="flex-initial justify- items-center">
      <img src={logo} alt="logo" className="w-52 cursor-pointer" />
    </div>
  </nav>
  );
};

export default Navbar;
