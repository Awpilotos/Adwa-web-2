import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portafolio() {
  return (
    <>
      <Navbar/>
      <div className="
        relative 
        section-wrapper-auto
        pb-30
        items-center 
        justify-center 
        bg-[url('/img/dark-blue-gradient.png')] 
        bg-cover 
        bg-center
        mt-[-90px]"
      >
        <div className="flex flex-col mt-[100px] items-center text-center text-white max-w-4xl px-6 pt-10 gap-10">

          <h1 className="text-white text-[50px] leading-[50px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px] text-left mb-[100px] lg:mb-0">
                Nuestro <br/>
                <span className="relative inline-block">
                    <span
                        className="
                        tracking-[0.26px]
                        bg-gradient-to-r
                        from-[#9700FF]
                        to-[#00B79F]
                        bg-clip-text
                        text-transparent"
                    >
                    Trabajo
                    </span>
                </span>
           </h1>
        </div>
      </div>
      <div className="section-wrapper bg-[#1C398E33]">
        <div className="section-container-large flex gap-4">
      
      {/* Contenedor de dos columnas */}
      <div className="flex flex-col flex-[0.9] gap-4">
        <div className="bg-gray-200 h-40 rounded-xl flex items-center justify-center">
          A
        </div>

        <div className="bg-gray-200 h-40 rounded-xl flex items-center justify-center">
          C
        </div>
      </div>

      {/* Right column (bigger) */}
      <div className="flex flex-col flex-[1.1] gap-4">
        <div className="bg-gray-300 h-40 rounded-xl flex items-center justify-center">
          B
        </div>

        <div className="bg-gray-300 h-40 rounded-xl flex items-center justify-center">
          D
        </div>
      </div>

    </div>
      </div>
      <Footer/>
    </>);
}