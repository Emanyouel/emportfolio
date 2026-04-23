import { BookAIcon } from "lucide-react";
import Emman from "../assets/Emman.jpg";

const Hero = () => {
  return (
    <section id="home" className="scroll-m-20 bg-sky-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight">
            Welcome to{" "}
            <span className="text-sky-600">Emmanuel's Portfolio</span>
          </h1>
          <p className="mt-6 text-gray-700 text-base sm:text-lg lg:text-xl">
            Discover my projects, skills, and experience as a passionate
            developer. Explore my work and get in touch!
          </p>
          <a
            href="#projects"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-lg font-medium text-white hover:bg-sky-700 transition"
          >
            View My Work
            <BookAIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src={Emman}
            alt="Hero Image"
            className="w-full max-w-md rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
