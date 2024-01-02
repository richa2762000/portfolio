import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

const Lending = () => {
  return (
    <>
      <div className="bg-indigo-950 w-full h-screen text-white relative">
        <div className="flex flex-col sm:flex-row h-full items-center">
          <h1 className="absolute top-1/2 text-3xl sm:relative sm:top-0 sm:animate-slideRight sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center sm:text-left px-4">
            Richa Chachan
          </h1>
          <img
            src="https://cdn.pixabay.com/photo/2020/02/19/07/48/web-4861605_1280.jpg"
            alt="loading"
            className="w-full h-full opacity-15 sm:opacity-100 sm:rotate-45 sm:w-60 sm:h-1/2 sm:animate-imgLeft"
          ></img>
        </div>
      </div>
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default Lending;
