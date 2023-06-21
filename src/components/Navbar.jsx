import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import Button2 from "./Button2";

const Navbar = () => {
  const [theme, setTheme] = useState();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[120px] flex justify-between items-center sm:px-20 dark:bg-dark bg-white">
      {/* Light/Dark toggle */}
      <div className="flex dark:bg-accent dark:hover:bg-secondary dark:text-light hover:dark:text-white bg-white hover:bg-light text-black hover:text-dark dark-border-[0px] border-[1px] dark:border-accent border-dark hover:border-black duration-500 rounded-full mx-10">
        <button
          onClick={switchTheme}
          className="justify-center items-center text-center space-x-2 p-3 flex"
        >
          <h1 className="text-sm dark:block hidden">Light</h1>
          <BsSunFill className="text-sm dark:block hidden" />
          <h1 className="text-sm dark:hidden block">Dark</h1>
          <BsMoonFill className="text-sm dark:hidden block" />
        </button>
      </div>

      {/* Mid menu */}
      <div className="hidden sm:flex">
        <ul className="hidden sm:flex">
          <li className="cursor-pointer dark:text-light hover:dark:text-white text-black hover:text-dark duration-500 dark:hover:bg-accent hover:bg-light px-3 py-2 rounded-xl">
            About
          </li>
          <li className="cursor-pointer dark:text-light hover:dark:text-white text-black hover:text-dark duration-500 dark:hover:bg-accent hover:bg-light px-3 py-2 rounded-xl">
            Development
          </li>
          <li className="cursor-pointer dark:text-light hover:dark:text-white text-black hover:text-dark duration-500 dark:hover:bg-accent hover:bg-light px-3 py-2 rounded-xl">
            Experience
          </li>
          <li className="cursor-pointer mx-10 dark:text-light hover:dark:text-white text-black hover:text-dark duration-500 dark:hover:bg-accent hover:bg-light px-3 py-2 rounded-xl">
            Contact
          </li>
          <li className="cursor-pointer dark:text-light hover:dark:text-white text-black hover:text-dark duration-500 dark:hover:bg-accent hover:bg-light px-3 py-2 rounded-xl">
            More
          </li>
        </ul>
      </div>

      {/* Hambogir */}
      <div
        onClick={handleClick}
        className="sm:hidden flex mx-10 dark:text-light text-dark z-10"
      >
        {!nav ? (
          <FaBars size={30} />
        ) : (
          <>
            <FaTimes size={30} />
          </>
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen dark:bg-dark bg-white dark:text-light text-dark flex flex-col  justify-center items-center"
        }
      >
        <li className="py-7 px-3 text-4xl">About</li>
        <li className="py-7 px-3 text-4xl">Development</li>
        <li className="py-7 px-3 text-4xl">Experience</li>
        <li className="py-7 px-3 text-4xl">More</li>
        <li className="py-7 px-3 text-4xl">Contact</li>
        <li className="flex justify-center items-center text-center space-x-12 py-7">
          <a href="https://github.com/" rel="noreferrer" target="_blank">
            <Button />
          </a>
          <a href="https://github.com/" rel="noreferrer" target="_blank">
            <Button2 />
          </a>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden sm:flex space-x-5 mx-10">
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <Button />
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <Button2 />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
