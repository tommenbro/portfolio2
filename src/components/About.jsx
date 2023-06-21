import AnimateOnScroll1 from "./AnimateOnScroll1";
import AnimateOnScroll2 from "./AnimateOnScroll2";
import AnimateOnScroll3 from "./AnimateOnScroll3";

const About = () => {
  return (
    <div name="about" className="w-full h-screen dark:bg-dark bg-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <AnimateOnScroll1>
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 dark:border-secondary border-accent dark:text-light text-black dark:hover:text-white hover:text-dark duration-500 cursor-default">
                About
              </p>
            </div>
            <div></div>
          </div>
        </AnimateOnScroll1>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <AnimateOnScroll2>
            <div className="text-3xl sm:text-right">
              <p className="dark:text-light text-dark font-semibold duration-500 cursor-default">
                <span className="dark:text-white text-black">Welcome</span>,
                Pleased to meet you! <br />
                My name is <br />
                <span className="dark:text-white text-dark hover:text-black border-secondary border-b-[2px] dark:border-secondary dark:border-b-[0px] hover:border-b-[2px] dark:hover:border-b-[2px] duration-200">
                  Tomas Nilsen Nakkerud.
                </span>
                <br />I hope you enjoy{" "}
                <a className="dark:hover:text-white hover:text-black hover:border-b-[2px] duration-200 border-secondary dark:border-b-[0px] hover:cursor-pointer">
                  my work.
                </a>
              </p>
            </div>
          </AnimateOnScroll2>
          <AnimateOnScroll3>
            <div className="text-md font-regular text-left">
              <p className="dark:text-light text-dark font-regular duration-500 cursor-default">
                I'm a passionate, 24 year old Fullstack Developer from Oslo,
                Norway. Alongside getting a Bachelor's degree in Frontend &
                Mobile Development, I've been coding and designing unique
                projects of interest. To me, it's always inspiring to take on
                new work, especially something different from the usual. <br />
                If you have any questions, feel free to{" "}
                <a className="dark:text-white text-black duration-300 font-light hover:border-b-2 border-accent dark:border-secondary cursor-pointer">
                  contact me!
                </a>
              </p>
            </div>
          </AnimateOnScroll3>
        </div>
      </div>
    </div>
  );
};

export default About;
