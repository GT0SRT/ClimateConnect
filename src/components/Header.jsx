import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      icon: <FaHome />,
      name: "Home",
      target: ""
    },
    {
      icon: <CiSearch />,
      name: "About",
      target: "about"
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Explore",
      target: "services"
    },
    {
      icon: <CiUser />,
      name: "Contact us",
      target: "contact"
    },
  ];

  return (
    <>
      <header className="p-[10px] pb-1 bg-[#ff7a32]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="w-[100px] font-bold text-[white] text-[22px]">
            ClimateConnect
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2"
            >
              <CiMenuFries size={30} />
            </button>
          </div>

          <nav className="hidden lg:flex list-none gap-5 ml-auto text-[16px] font-semibold text-[white]">
            {links.map((link, index) => (
              <NavLink
                key={index}
                className="cursor-pointer flex items-center gap-2 border-b-4 border-[#ff7a32] hover:border-[white] hover:animate p-2"
                to={`/${link.target}`}
              >
                {link.icon}
                <li>{link.name}</li>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden p-4 mt-4`}
        >
          <nav className="list-none text-white text-[16px] font-semibold">
            {links.map((link, index) => (
              <NavLink
                key={index}
                className="cursor-pointer flex items-center gap-2 hover:text-[#E1341E] mb-4"
                to={`/${link.target}`}
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.icon}
                <li>{link.name}</li>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;