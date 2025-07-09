import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") return false;
    return true; // Default is dark
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <section className="container ">
        <div className="flex h-32 justify-between items-center lg:py-4 lg:px-6">
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
              <li className="link md:block hidden">dfdfdfd</li>
              <li
                className="link material-symbols-rounded"
                // onClick={() => setIsDark(!isDark)}
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
