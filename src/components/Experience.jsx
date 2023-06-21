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
              <p className="mt-5 mb-10 sm:text-center text-sm font-normal dark:text-light text-black duration-500 cursor-default">
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
            <div className="mx-auto flex-col items-center justify-center text-center sm:mr-5">
              <div className="flex space-x-5">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiHtml5 alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1 opacity-0 group-hover:opacity-100 duration-300">
                      HTML
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiCss3 alt="CSS" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      CSS
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <DiJavascript alt="JavaScript" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      JS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 mt-5">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiReact alt="React" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      React
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiNextdotjs alt="Next.js" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Next
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiVuedotjs alt="Vue" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Vue
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 mt-5">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <FaJava alt="Swift" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Swift
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiSwift alt="Java" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Java
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiKotlin alt="Kotlin" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Kotlin
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex-col items-center justify-center text-center ml-5">
              <div className="flex space-x-5">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiFigma alt="Figma" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Figma
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiTailwindcss alt="TailWindCSS" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      TW
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiSolidity alt="Solidity" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Solidity
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 mt-5">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiGithub alt="GitHub" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Github
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiVercel alt="Vercel" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Vercel
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiHeroku alt="Heroku" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Heroku
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 mt-5">
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiMongodb alt="MongoDB" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Mongo
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-5 rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiFirebase alt="HTML" size={40} />
                    <p className="text-xs font-light pt-1  opacity-0 group-hover:opacity-100 duration-300">
                      Fb
                    </p>
                  </div>
                </div>
                <div className="text-center dark:bg-accent bg-secondary p-3 px-[17px] rounded-xl group">
                  <div className="dark:text-light text-white">
                    <SiDirectus alt="Directus" size={40} />
                    <p className="text-xs font-light pt-1 opacity-0 group-hover:opacity-100 duration-300">
                      Directus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll4>
        <AnimateOnScroll4>
          <div className="max-w-[1000px] w-full grid mt-10">
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
                During the development we used technologies like Figma, React
                Native, TailwindCSS, Firebase & more. <br />
              </p>
            </div>
          </div>
        </AnimateOnScroll4>
      </div>
    </div>
  );
};

export default Experience;
