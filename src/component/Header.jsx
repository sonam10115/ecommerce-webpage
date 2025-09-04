import React, { useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { navItems } from "../constant/data";

const Header = () => {
  const [isopen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isopen);
  };
  return (
    <header className="w-full py-5">
      <div className="container flex items-center justify-between border-b border-b-white-95 pb-5 ">
        {/* logo */}
        <a href="#">
          <img src="/image/logo.png" alt="logo" width={170} height={50} />
        </a>
        {/* mobile menu */}
        <nav className={`navbar ${isopen ? "active" : ""}`}>
          {/* close menu */}
          <button className="absolute top-8 right-8" onClick={handleClick}>
            <RiCloseLine size={30} />
          </button>

          {/* list */}
          <ul className="space-y-5 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="text-lg font-medium hover:text-orange-50 transition-colours"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/*login button */}
          <button className="primary-btn mt-12 max-w-40 w-full">Login</button>
        </nav>
        {/* menu button */}
        <button className="lg:hidden" onClick={handleClick}>
          <RiMenuLine />
        </button>

        {/* Lg Menu */}
        <div className="max-lg:hidden flex items-center gap-10">
          {/* list */}
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="hover:text-orange-50 transition-colours font-medium text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* lg login button */}
          <button className="max-lg:hidden primary-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
