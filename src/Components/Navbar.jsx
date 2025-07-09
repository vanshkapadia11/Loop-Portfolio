import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <section className="container ">
        <div className="flex h-32 justify-between items-center py-4 px-6">
          <div className="logo">
            <span className="material-symbols-rounded font-semibold dark:text-black text-white text-[30px]">
              360
            </span>
          </div>
          <nav className="">
            <ul className="flex md:space-x-6 bg-[#242424] dark:bg-[#f9f9f9] py-4 px-6 rounded-full">
              <li className="link active md:block hidden">ABOUT</li>
              <li className="link md:block hidden">BLOG</li>
              <li className="link md:block hidden">PROJECTS</li>
              <li className="link md:block hidden">RESUME</li>
              <li
                className="link material-symbols-rounded"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "brightness_7" : "bedtime"}
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
