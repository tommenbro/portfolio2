import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import TypeWriter from "./TypeWriter";
import { BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import AnimateOnScroll2 from "./AnimateOnScroll2";
import AnimateOnScroll3 from "./AnimateOnScroll3";
import AnimateOnScroll5 from "./AnimateOnScroll5";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-dark">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center text-center h-full pt-20 duration-500">
        <TypeWriter />
        <h1 className="text-black dark:text-white border-b-accent dark:border-b-secondary hover:border-b-[2px] border-b-[0px] dark:hover:border-b-[2px] dark:border-b-[0px] duration-200 cursor-default font-semibold text-xl sm:text-5xl mt-20 sm:mt-20">
          I'm Aryes
        </h1>
        <h1 className="text-dark dark:text-light font-light text-lg sm:text-xl pt-10 sm:pt-10 duration-500">
          A Fullstack Developer & more
        </h1>
        <div className="flex justify-center items-center text-center space-x-14 mt-10">
          <AnimateOnScroll2>
            <a
              href="https://www.linkedin.com/"
              className="items-center justify-center text-center"
            >
              <BsLinkedin
                className="text-black hover:text-dark dark:text-light hover:dark:text-white duration-300 items-center justify-center text-center"
                size={40}
              />
            </a>
          </AnimateOnScroll2>
          <AnimateOnScroll3>
            <a
              href="mailto:inteceptarugginbruv@gmail.com"
              className="items-center justify-center text-center"
            >
              <AiFillMail
                className="text-black hover:text-dark dark:text-light hover:dark:text-white duration-300 items-center justify-center text-center"
                size={57}
              />
            </a>
          </AnimateOnScroll3>
        </div>
        <AnimateOnScroll5>
          <div className="mt-10 justify-center items-center text-center">
            <button className="group dark:text-light hover:dark:text-white text-black hover:text-dark border-2 px-6 py-3 rounded-lg flex items-center duration-500 hover:bg-lighter dark:hover:bg-black font-light hover:shadow-sm">
              My Work
              <span className="group-hover:scale-105 duration-300">
                <HiArrowNarrowRight className="ml-2 mt-[0.1rem]" />
              </span>
            </button>
          </div>
        </AnimateOnScroll5>
      </div>
    </div>
  );
};

export default Hero;
