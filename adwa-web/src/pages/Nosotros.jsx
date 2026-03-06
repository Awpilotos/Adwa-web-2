import React from "react";

export default function Nosotros() {
  return (
    <div className="
      relative 
      section-wrapper 
      items-center 
      justify-center 
      bg-[url('/img/dark-blue-gradient.png')] 
      bg-cover 
      bg-center
      mt-[-90px]"
    >
      <div className="flex flex-col mt-[100px] items-center text-center text-white max-w-4xl px-6 gap-10">

        <h1 className="text-[70px] leading-[75px] font-normal">
          Diseñamos tu estrategia<br/>
          de liderazgo digital,
        </h1>

        <p className="max-w-2xl">
          
        </p>

        <button className="
          px-6 py-3 
          rounded-[20px] 
          bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
        ">
          Agenda una sesión gratuita
        </button>

      </div>
    </div>
  );
}