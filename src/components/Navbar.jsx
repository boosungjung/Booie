import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { logo, menu, close } from "../assets";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 relative z-50`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            BooSung Jung
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`text-secondary hover:text-white transition-all duration-200 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={100}
                offset={-20}
              >
                {link.title}
              </ScrollLink>
              {/* <a href={`#${link.id}`}>{link.title}</a> */}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`fixed inset-0 bg-black opacity-50 ${
              toggle ? "block" : "hidden"
            }`}
            onClick={() => setToggle(false)}
          />
          <div
            className={`p-6 pt-10 bg-tertiary fixed top-0 right-0 mx-0 my-0 min-w-[140px] h-screen z-99999 transform transition-all duration-200 ease-in-out ${
              toggle
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={close}
              alt="close"
              className="object-contain cursor-pointer absolute top-2 right-2 pt-4 pr-4"
              onClick={() => setToggle(false)}
            />
            <ul className="list-none flex  items-start flex-col gap-4 ">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`text-secondary
                  font-poppins font-medium cursor-pointer text-[16px] m-10 hover:text-white transition-all duration-500`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
