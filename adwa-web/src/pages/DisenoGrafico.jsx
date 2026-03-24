import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import dark_blue_gradient from "../assets/img/dark-blue-gradient.jpg";

export default function DisenoGrafico() {
  return (
    <>
      <Navbar/>
      <div className="
        relative 
        section-wrapper-auto
        pb-30
        items-center 
        justify-center 
        bg-cover 
        bg-center
        mt-[-90px]"
        style={{ backgroundImage: `url(${dark_blue_gradient})` }}
      >
        <div className="flex flex-col mt-[100px] items-center text-center text-white max-w-4xl px-6 pt-10 gap-10">

          <h1 className="text-[40px] leading-[40px] lg:text-[70px] lg:leading-[75px] font-normal">
            Diseñamos tu estrategia<br/>
            de liderazgo digital,
          </h1>

          <p className="max-w-2xl text-[20px] leading-[28px] lg:text-[35px] lg:leading-[40px] ">
            te entrenamos en comunicación auténtica y generamos un impacto medible en tu industria.
          </p>

        </div>
      </div>
      <div className="section-wrapper bg-[#1C398E33]">

      </div>
      <Footer/>
    </>
    );
}