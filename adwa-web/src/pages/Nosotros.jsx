import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer2";
import HeroHeader from "../components/ui/HeroHeader";

import gradient from "../assets/img/dark-blue-gradient.jpg";

import placeholder_nosotros from "../assets/img/placeholder_nosotros.webp";

export default function Nosotros() {
  return (
    <>
      <Navbar2/>
      <div
        className="relative flex min-h-[65dvh] lg:min-h-[80dvh] bg-cover bg-center bg-no-repeat section-wrapper-auto bg-cover bg-center mt-[-90px]"
        style={{ backgroundImage: `url(${gradient})` }}
      >
        <div className="max-w-[85%] lg:max-w-[65%] mx-auto flex flex-col items-center justify-center mt-[10dvh] gap-[21px] ">
            <h1 className="text-center font-bold text-white text-[40px] leading-[40px] lg:text-[50px] lg:leading-[54px]">
              Diseñamos tu estrategia<br/>
              de liderazgo digital,
            </h1>

            <p className="max-w-2xl text-center font-medium text-white text-[20px] leading-[28px] lg:text-[30px] lg:leading-[42px] ">
              te entrenamos en comunicación auténtica y generamos un impacto medible en tu industria.
            </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto bg-[linear-gradient(296deg,rgba(39,22,51,1)_18%,rgba(28,57,142,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]">

        <img
          className="w-full object-cover"
          src={placeholder_nosotros}
          alt="Videos nosotros"
          loading="lazy"
        />
      </div>

      <Footer2/>
    </>
    );
}