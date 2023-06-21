/* eslint-disable react/jsx-no-comment-textnodes */
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiSwift,
  SiSolidity,
  SiIonic,
  SiMongodb,
  SiVercel,
  SiHeroku,
  SiGithub,
  SiFirebase,
  SiTypescript,
  SiKotlin,
  SiFigma,
  SiDirectus,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs, FaJava } from "react-icons/fa";
import AnimateOnScroll1 from "./AnimateOnScroll1";
import AnimateOnScroll2 from "./AnimateOnScroll2";
import AnimateOnScroll3 from "./AnimateOnScroll3";
import AnimateOnScroll4 from "./AnimateOnScroll4";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen dark:bg-dark bg-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid">
          <div className="sm:text-center mt-16">
            <AnimateOnScroll1>
              <p className="text-4xl font-bold inline border-b-4 dark:border-secondary border-accent dark:text-light text-black dark:hover:text-white hover:text-dark duration-500 cursor-default">
                Experience
              </p>
            </AnimateOnScroll1>
            <AnimateOnScroll2>
              <p className="mt-4 mb-8 sm:text-center text-sm font-normal dark:text-light text-black duration-500 cursor-default">
                <span className="dark:text-secondary text-accent text-sm">
                  //
                </span>{" "}
                Technologies I've worked with, in order of most experience.
              </p>
            </AnimateOnScroll2>
          </div>
          <div></div>
        </div>
        <AnimateOnScroll4>
          <div className="mx-auto flex items-center justify-center text-center">
            <div className="mx-auto flex-col items-center justify-center text-center sm:mr-4">
              <div className="flex space-x-4">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiHtml5 alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">HTML</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiCss3 alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">CSS</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <DiJavascript alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">JS</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiReact alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">ReactN</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiNextdotjs alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Next</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiVuedotjs alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Vue</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <FaJava alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Swift</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiSwift alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Java</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiKotlin alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Kotlin</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex-col items-center justify-center text-center ml-4">
              <div className="flex space-x-4">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiFigma alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Figma</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiTailwindcss alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">TW</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiSolidity alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Solidity</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiGithub alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Github</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiVercel alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Vercel</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiHeroku alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Herokuu</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiMongodb alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Mongo</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiFirebase alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Fb</p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl">
                  <div className="dark:text-light text-white">
                    <SiDirectus alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1">Directus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll4>
        <AnimateOnScroll4>
          <div className="max-w-[1000px] w-full grid mt-8">
            <div className="sm:text-center">
              <p className="text-sm font-light  dark:text-white text-black dark:hover:text-white hover:text-dark duration-500 cursor-default">
                During my studies at{" "}
                <span className="dark:border-b-[1px] border-b-[1px] dark:border-secondary border-accent">
                  Kristiania University College
                </span>{" "}
                I got to learn a lot of different technologies. <br />
                These are some of them. <br />
                Throughout the{" "}
                <span className="dark:border-b-[1px] border-b-[1px] dark:border-secondary border-accent">
                  Bachelor's degree
                </span>{" "}
                we learnt Fullstack, with a focus on Frontend & Mobile
                development.
                <br />
                <br />
                For my thesis, I took part in a project where we developed a
                mobile application for a client. <br />
                The group used technologies like React Native, NativeWind,
                Firebase & more. <br />
              </p>
            </div>
          </div>
        </AnimateOnScroll4>
      </div>
    </div>
  );
};

export default Experience;
